const quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "So many books, so little time.",
        author: "Frank Zappa",
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "Without music, life would be a mistake.",
        author: "Friedrich Nietzsche",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
