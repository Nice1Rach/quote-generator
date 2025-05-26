const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
  if (!loader.hidden) {
    quoteContainer.hidden = false;
    loader.hidden = true;
  }
}

// Use the global localQuotes variable from quotes.js
function getRandomLocalQuote() {
  if (!localQuotes || localQuotes.length === 0) {
    return { text: "Stay positive!", author: "Unknown" };
  }
  return localQuotes[Math.floor(Math.random() * localQuotes.length)];
}

async function getQuote() {
  showLoadingSpinner();

  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

  try {
    const response = await fetch(proxyUrl + apiUrl);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();

    authorText.innerText = data.quoteAuthor.trim() || 'Unknown';

    if (data.quoteText.length > 120) {
      quoteText.classList.add('long-quote');
    } else {
      quoteText.classList.remove('long-quote');
    }

    quoteText.innerText = data.quoteText;
  } catch (error) {
    console.warn('API fetch failed, showing local quote:', error);

    const fallback = getRandomLocalQuote();

    authorText.innerText = fallback.author || 'Unknown';

    if (fallback.text.length > 120) {
      quoteText.classList.add('long-quote');
    } else {
      quoteText.classList.remove('long-quote');
    }

    quoteText.innerText = fallback.text;
  } finally {
    removeLoadingSpinner();
  }
}

// Tweet Quote
function tweetQuote() {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuote();