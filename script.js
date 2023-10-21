"use strict";

//(1) First block, create a number and change it when you press the button again
// Присваевам необходимым элементам название переменных

let checkButton = document.querySelector("#btn-check");
let userNumber;
let score = document.querySelector(".score").innerHTML;
let numberOfClicks = 0;
let highscore = document.querySelector(".highscore").innerHTML;
console.log(highscore);
let scoreFinish;
let body = document.querySelector("body");
let soundVictorty = new Audio("audio/Victory.mp3");
let soundWrong = new Audio("audio/Wrong.mp3");
let again = document.querySelector("#btn-again");

// We assign the value to the desired number at the start of the page
// Задаем число при запуске страницы
let requiredNumber = Math.floor(Math.random() * (21 - 1) + 1);
console.log(`Загаданное число = ${requiredNumber}`);
//set the listener to the button again
//При нажатии на кнопку Снова, задается новое число, сбрасываются счетчики
again.addEventListener("click", function () {
  (requiredNumber = Math.floor(Math.random() * (21 - 1) + 1)),
    console.log(`Загаданное число = ${requiredNumber}`);
  body.style.background = "#232229";
  document.querySelector(".score").innerHTML = 20;
  document.querySelector(".highscore").innerHTML = 0;
  numberOfClicks = 0;
  document.querySelector("input").value = ``;
});

//(2) Второй блок с вводом числа от пользователя и проверкой совпадения

checkButton.addEventListener("click", function () {
  userNumber = document.querySelector("input").value;
  scoreFinish = score - (numberOfClicks + 1);
  console.log(`Число введенное пользлователем = ${userNumber}`);
  numberOfClicks += 1;
  console.log(`Число попыток пользователя = ${numberOfClicks}`);
  document.querySelector(".score").innerHTML = `${scoreFinish}`;

  if (userNumber > requiredNumber) {
    soundWrong.play();
    alert("Введенное число больше загаданного");
  } else if (userNumber < requiredNumber) {
    soundWrong.play();
    alert("Введенное число меньше загаданного");
  } else if (userNumber == ` `) {
    soundWrong.play();
    alert("Вы не ввели число в поле начните угадывать");
  } else {
    soundVictorty.play();
    document.querySelector(".highscore").innerHTML = `${numbeOfClicks}`;
    body.style.background = "#2cd050";
    alert("Победа, Вы угадали");
  }

  if (numberOfClicks == 20) {
    checkButton.setAttribute("disabled", "");
    alert("Вы использовали все 20 попыток, попробуйте сыграть снова попозже");
  }
});
