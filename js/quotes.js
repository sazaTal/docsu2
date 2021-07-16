const quotes = [
  {
    quote: "The way to get started is to quit talking and begin ...",
    author: "Walt Disney",
  },
  {
    quote: "Cat is cute",
    author: "cat",
  },
  {
    quote: "Dog is lovely",
    author: "Dog",
  },
  {
    quote: "I don't like human",
    author: "Me",
  },
  {
    quote: "lalalallalala",
    author: "Musission",
  },
  {
    quote: "어쩌고저쩌고 어쩌구",
    author: "저쩌구",
  },
  {
    quote: "이러쿵저러쿵",
    author: "망설이지마",
  },
  {
    quote: "걸스브링더보이스아웃",
    author: "걸스제네레이션",
  },
  {
    quote: "암온더넥스트레블",
    author: "에스파",
  },
  {
    quote: "아름다워... 드디어 돌아왔군요.....",
    author: "12 05",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

function handleMouseOver() {
  author.style.opacity = 0.6;
}

function handleMouseOut() {
  author.style.opacity = 0;
}

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


quote.addEventListener("mouseover", handleMouseOver);
quote.addEventListener("mouseout", handleMouseOut);

//visibility hidden => visible

console.dir(author);