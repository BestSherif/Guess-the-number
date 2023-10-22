"use strict";

//(1) First block, create a number and change it when you press the button again
// Присваевам необходимым элементам название переменных

let checkButton = document.querySelector("#btn-check");
let userNumber;
let score = document.querySelector(".score").innerHTML;
let numberOfClicks = 0;
let highscore = document.querySelector(".highscore").innerHTML;
let scoreFinish;
let body = document.querySelector("body");
let soundVictorty = new Audio("audio/Victory.mp3");
let soundWrong = new Audio("audio/Wrong.mp3");
let soundGameOver = new Audio("audio/Game Over.mp3");
let again = document.querySelector("#btn-again");
let displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

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
  document.querySelector(".number").innerHTML = `?`;
  displayMessage("Начните угадывать");
});

//(2) Второй блок с вводом числа от пользователя и проверкой совпадения

checkButton.addEventListener("click", function () {
  userNumber = +document.querySelector("input").value;
  scoreFinish = score - (numberOfClicks + 1);
  console.log(`Число введенное пользлователем = ${userNumber}`);
  numberOfClicks += 1;
  console.log(`Число попыток пользователя = ${numberOfClicks}`);
  document.querySelector(".score").innerHTML = `${scoreFinish}`;

  if (userNumber > requiredNumber) {
    soundWrong.play();
    displayMessage("Введенное число больше загаданного");
  } else if (!userNumber) {
    soundWrong.play();
    displayMessage("Введите число");
  } else if (userNumber < requiredNumber) {
    soundWrong.play();
    displayMessage("Введенное число меньше загаданного");
  } else {
    soundVictorty.play();
    document.querySelector(".highscore").innerHTML = `${numberOfClicks}`;
    body.style.background = "#2cd050";
    document.querySelector(".number").innerHTML = `${userNumber}`;
    displayMessage("Вы победили");
  }

  if (numberOfClicks == 20) {
    checkButton.setAttribute("disabled", "");
    displayMessage("Вы проиграли");
    soundGameOver.play();
  }
});
