const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader')

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

async function getQuote() {
    showLoadingSpinner();
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        if (data.quoteAuthor === '') {
            authorText.innerText = 'Unknown';
        } else {
            authorText.innerText = data.quoteAuthor;
        }
        if (data.quoteText.length > 120) {
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote');
        }
        quoteText.innerText = data.quoteText;
        removeLoadingSpinner();
    } catch (error) {
        getQuote();
    }
}

function tweetQuote() {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');
}

newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

getQuote();


//  const quoteContainer = document.getElementById('quote-container');
//  const quoteText = document.getElementById('quote');
//  const authorText = document.getElementById('author');
//  const twitterBtn = document.getElementById('twitter');
//  const newQuoteBtn = document.getElementById('new-quote');
//  const loader = document.getElementById('loader');
 
//  let apiQuotes = [];

//  // Show Loading
//  function loading() {
//      loader.hidden = false;
//      quoteContainer.hidden = true;
//  }

//  // Hide Loading
//  function complete() {
//      quoteContainer.hidden = false;
//      loader.hidden = true;
//  }

// // Show New Quote
// // function newQuote() {
// //     const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
// //     console.log(quote);
// // }
// function newQuote() {
//     loading();
// //     // Pick a random quote from apiQuotes array
//     const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
//     // Check if Author field is blank and replace it with 'Unknown'
//     if (!quote.author) {
//         authorText.textContent = 'Unknown';
//     } else {
//         authorText.textContent = quote.author;
//     }
//     // Check Quote length to determine styling
//     if (quote.text.length > 50) {
//         quoteText.classList.add('long-quote');
//     } else {
//         quoteText.classList.remove('long-quote');
//     }
//     // Set Quote, Hide Loader
//     quoteText.textContent = quote.text;
//     complete();
//  }

// //  Get Quotes From API
//  async function getQuotes() {
//      loading();
//      const apiUrl = 'https://type.fit/api/quotes';
//      try {
//          const response = await fetch(apiUrl);
//          apiQuotes = await response.json();
//          newQuote();
//      } catch (error) {
// //         // Catch Error Here
//     }
//  }

// //  Tweet Quote
// function tweetQuote() {
//     const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
//     window.open(twitterUrl, '_blank');
// }

// // Event Listeners
// newQuoteBtn.addEventListener('click', newQuote);
// twitterBtn.addEventListener('click', tweetQuote);

// //  On Load
// getQuotes();
// // // newQuote();
// // //loading();