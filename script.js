function clearAll(){
  const memeContainer =  document.querySelector('.meme-content');
  memeContainer.innerHTML = "";
    const jokeContainer =  document.querySelector('.joke-content');
  jokeContainer.innerHTML = "";
    const quoteContainer =  document.querySelector('.quote-content');
  quoteContainer.innerHTML = "";
}
function showMeme(){
  clearAll();
  const memeUrl = getRandomData("memes");
  const memeContainer = document.querySelector('.meme-content');
  const newMeme = document.createElement('img');
  newMeme.setAttribute('src', memeUrl);
  memeContainer.appendChild(newMeme);
  console.log(newMeme);
}
function showJoke(){
  clearAll();
  const joke = getRandomData("jokes");
  const jokeContainer = document.querySelector('.joke-content');
  const newJoke = document.createElement('p');
  newJoke.textContent=joke;
  jokeContainer.appendChild(newJoke);
  console.log(jokeContainer);
}
function showQuote(){
    clearAll();
  const quote = getRandomData("quotes");
  const quoteContainer = document.querySelector('.quote-content');
  const newQuote = document.createElement('p');
  const quoteText = quote.quote;
  const quoteAuthor = quote['author'];
   // console.log(quoteText);
   //  console.log(quoteAuthor);
   const newAuthor = document.createElement('p');
  newQuote.textContent=quoteText;
  newAuthor.textContent=quoteAuthor;
  quoteContainer.appendChild(newQuote);
  quoteContainer.appendChild(newAuthor);
   // console.log(quoteContainer);
}

function showRiddle(){
    clearAll();
  const riddle = getRandomData("riddles");
  const riddleContainer = document.querySelector('.riddle-content');
  const newRiddle = document.createElement('p');
  const riddleText = riddle.question;
 const riddleAnswer = riddle.answer;
   const newAnswer = document.createElement('p');
  newAnswer.setAttribute('id', 'riddle-answer');
   // console.log(newAnswer);
  newAnswer.hidden = true;
  newAnswer.textContent=riddleAnswer;  newRiddle.textContent=riddleText;
  riddleContainer.appendChild(newRiddle);
    riddleContainer.appendChild(newAnswer);
  
   // console.log(quoteContainer);
}
function showAnswer(){
  const newAnswer = document.querySelector('#riddle-answer');
  newAnswer.hidden = false;
}
const memes = [ "https://cs13.pikabu.ru/post_img/2023/01/26/8/1674737374154760580.jpg", "https://preview.redd.it/bk51r5hd34c71.png?width=640&crop=smart&auto=webp&s=92bf3b052d2632775e023cb0844b2cf20a6d4767",
"https://cs13.pikabu.ru/post_img/2022/12/14/6/1671008037224421279.jpg"
];
const jokes = ["Программист звонит в библиотеку.— Здравствуйте, Катю можно?— Она в архиве. —Разархивируйте ее пожалуйста. Она мне срочно нужна!", "— Настоящий программист всегда должен ложиться спать или в 1:28 или в 2:56... Ну, на крайний случай, в 5:12.— А вставать в 10:24. Ну, на крайний случай, в 20:48.", "Если бы программисты были врачами, им бы говорили «У меня болит нога», а они отвечали «Ну не знаю, у меня такая же нога, а ничего не болит»"];
const quotes = [
  { quote: "Учится, учится и еще раз учиться!", author: "В.И. Ленин" },
  { quote: "Ну, поехали!", author: "Ю.А. Гагарин"},
  { quote: "Социализм или варварство", author: "Р. Люксембург" }
];

const riddles = [
 { question: "Коромысло на небе повисло", answer: "Радуга" },
  { question: "Висит груша нельзя скушать", answer: "Лампочка" },
  { question: "Сидит дед во сто шуб одет", answer: "Лук" }
];
const data = {
  memes,
  jokes,
  quotes,
  riddles
};
function rn_num(len){
  return Math.floor(Math.random()*len);
}
function getRandomData(type){
  return data[type][rn_num(data[type].length)];
}
showMeme();
// console.log(getRandomData('quotes'));
