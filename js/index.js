// рандомные сообщения.
function getRandomInt(min, max) {
    let number = Math.floor(Math.random() * (max - min)) + min;
    return number;
}

// котейнер шляпы и вывод сообщений.
let hat = document.querySelector(`.hat`);
let result = document.querySelector(`.result`);
let messages = [
  `Добро пожаловать в Гриффиндор!`,
  `Тебя ждёт большая удача`,
  `На обед будет что-то невкусное`,
  `Одевайся теплей`,
  `Тебя ждёт финансовое благополучие`,
  `Отлично выспишься сегодня!`,
  `Домашку всё равно придётся сделать`,
  `Кто-то сделает тебе комплимент`,
  `Выходные пройдут отлично`,
  `Шляпа устала, предсказания не будет`
  ];



hat.addEventListener('click', function() {
  let i = getRandomInt(0, messages.length);
  let message = messages[i];
  result.textContent = message;

});
