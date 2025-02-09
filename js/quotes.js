const quotes = [
    {
        quote: "Talk is cheap. Show me the code.",
        author: "Linus Torvalds",
    },
    {
        quote: "Stay hungry, stay foolish.",
        author: "Steve Jobs",
    },
    {
        quote: "Your most unhappy customers are your greatest source of learning.",
        author: "Bill Gates",
    },
    {
        quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
        author: "Harold Abelson",
    },
    {
        quote: "The people who are crazy enough to think they can change the world are the ones who do.",
        author: "Steve Jobs",
    },
    {
        quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler",
    },
    {
        quote: "Don’t compare yourself with anyone in this world. If you do so, you are insulting yourself.",
        author: "Bill Gates",
    },
    {
        quote: "Code is like humor. When you have to explain it, it’s bad.",
        author: "Cory House",
    },
    {
        quote: "It’s fine to celebrate success, but it is more important to heed the lessons of failure.",
        author: "Bill Gates",
    },
    {
        quote: "First, solve the problem. Then, write the code.",
        author: "John Johnson",
    },
    {
        quote: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs",
    },
    {
        quote: "If you’re changing the world, you’re working on important things. You’re excited to get up in the morning.",
        author: "Larry Page",
    },
    {
        quote: "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.",
        author: "Mark Zuckerberg",
    },
    {
        quote: "The best minds of my generation are thinking about how to make people click ads.",
        author: "Jeff Hammerbacher",
    },
    {
        quote: "Simplicity is the soul of efficiency.",
        author: "Austin Freeman",
    }
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
