/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// An array of objects with quote information
const quotes = [
  {
    quote: 'Clever girl',
    source: 'Robert Muldoon',
    year: 1993,
    genre: 'Adventure, Sci-Fi, Thriller'
  },
  {
    quote: 'Welcome... to Jurassic Park',
    source: 'John Hammond',
    citation: 'Jurassic Park',
  },
  {
    quote: 'Help me, Obi-Wan Kenobi. You’re my only hope',
    source: 'Leia Organa',
    citation: ' Star Wars Episode IV: A New Hope',
    year: 1977
  },
  {
    quote: "I'm one with the Force. The Force is with me",
    source: 'Chirrut Îmwe',
    citation: 'Star Wars: Rogue One',
    year: 2016,
    genre: 'Action, Adventure, Sci-Fi'
  },
  {
    quote: 'Do. Or do not. There is no try', 
    source: 'Yoda',
    citation: 'Star Wars Episode V: The Empire Strikes Back',
    year: 1980
  }
];

const backgroundColors = ['#0e2f44', '#a27268', '#a7adba', '#414042', '#2f7585', '#1E8856'];

/**
 * getRandomQuote generates a new random quote
 */
let getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

/**
 * getRandomBackgroundColor generates a new random background color
 */
let getRandomColor = () => backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

/**
 * printQuote calls the getRandomQuote function and uses dot notation to access key/value pairs.
 * With access to the random quote, we are manipulating the DOM to inject the new quote.
 * Lastly, we are changing the background color to a random color
 */
const printQuote = () => {
  const randomQuote = getRandomQuote();
  const randomColor = getRandomColor();

  document.body.style.background = randomColor;

  let quoteHtml = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `;

  if (randomQuote.citation) {
    quoteHtml += `
      <span class="citation">${randomQuote.citation}</span>
    `;
  }

  if (randomQuote.year) {
    quoteHtml += `
      <span class="year">${randomQuote.year}</span>
    `;
  }

  if (randomQuote.genre) {
    quoteHtml += `
      <span class="genre">${randomQuote.genre}</span>
    `;
  }

  quoteHtml += '</p>';

  document.querySelector('#quote-box').innerHTML = quoteHtml;
}

// set interval method so that a new quote is generated every 10 seconds
setInterval(printQuote, 10000);

/* event listener to respond to "Show another quote" button clicks
when user clicks anywhere on the button, the "printQuote" function is called */
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
