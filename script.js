 const quoteContainer = document.getElementById('quote-container');
 const quoteText = document.getElementById('quote');
 const authorText = document.getElementById('author');
 const twitterBtn = document.getElementById('twitter');
 const newQuoteBtn = document.getElementById('new-quote');
 const loader = document.getElementById('loader');

  // Show Loading Spinner
 function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
 }

 // Hide Loading Spinner
 function removeLoadingSpinner() {
    quoteContainer.hidden = false;
    loader.hidden = true;
 }

 //  Get Quotes From API
  async function getQuote() {
      showLoadingSpinner();
      const apiUrl = 'https://type.fit/api/quotes';
      try {
          const response = await fetch(apiUrl);
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
           console.log('whooops, no quote', error);
     }
  }

 //  Tweet Quote
 function tweetQuote() {
     const quote = quoteText.innerText;
     const author = authorText.innerText;
     const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
     window.open(twitterUrl, '_blank');
 }

 // Event Listeners
 newQuoteBtn.addEventListener('click', getQuote);
 twitterBtn.addEventListener('click', tweetQuote);

 //  On Load
 getQuote();
