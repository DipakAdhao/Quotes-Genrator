
  
  document.addEventListener('DOMContentLoaded', () => {
    const newQuoteButton = document.getElementById('newQuoteButton');
    newQuoteButton.addEventListener('click', fetchQuote);
  
    fetchQuote();
  });
  
  async function fetchQuote() {
    const apiUrl = 'https://api.quotable.io/random';
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
       console.log(data);
  
      const quoteText = document.getElementById('quoteText');
      quoteText.textContent = `"${data.content}" - ${data.author}`;
    } catch (error) {
      console.log('An error occurred:', error);
    }
  }
  
