var myArray = [
  "買買波奇",
  "酸辣粉",
  "能量小姐",
  "好餓",
  "粥大福",
  "牛肉麵",
  "摩斯",
  "韓式濟卅豆腐鍋",
  "好事鍋",
];

var luckyman = document.getElementById("luckyman");
var allman = document.getElementById("array");
var btn = document.getElementById("btn");

btn.addEventListener("click", RandArray);

function RandArray() {
  let choose = getRandom(myArray.length);
  let rValue = myArray[choose];
  luckyman.innerHTML = rValue;
}

function getRandom(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

allman.innerHTML = myArray;

RandArray();
