const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

//Show Loading Spinner

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

//Hide loading Spinner

function removeLoadingSpinner() {
  if (!loader.hidden) {
    quoteContainer.hidden = false; //show quote container
    loader.hidden = true; //hide loader
  }
}

//Get Quote from API
async function getQuote() {
  showLoadingSpinner();
  const proxyUrl = 'https://enigmatic-woodland-20713.herokuapp.com/';
  const apiUrl = 'https://type.fit/api/quotes';

  try {
    const response = await fetch(proxyUrl + apiUrl);

    const data = await response.json();

    // Check if Author field is blank and replace it with 'Unknown'
    if (data.quoteAuthor === '') {
      authorText.innerText = 'Unknown';
    } else {
      authorText.innerText = data.quoteAuthor;
    }

    //Reduce font size for long quotes

    if (data.quoteText.length > 120) {
      quoteText.classList.add('long-quote');
    } else {
      quoteText.classList.remove('long-quote');
    }

    quoteText.innerText = data.quoteText; //data we get from api

    //Stop  loader,show quote
    removeLoadingSpinner();
  } catch (error) {
    getQuote();
    console.log('whooops,no quote', error);
  }
}

//Tweet Quote
function tweetQuote() {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank');
}

//Event Listeners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

//On Load

getQuote();
