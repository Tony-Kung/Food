var myArray = [
  "買買波奇",
  "酸辣粉",
  "能量小姐",
  "好餓",
  "粥大福",
  "牛肉麵",
  "摩斯",
  "一口入魂雞白湯拉麵",
  "檸檬草美食茶房",
  "石二鍋",
  "8鍋臭臭鍋",
  "帕霏兔",
  "賀屋日式關東煮",
  "芊苡號 日式炒麵便當",
  "愛玉早餐店",
  "劉家涼麵-514輔大店",
  "三舅媽油飯",
  "方禾食呂(健康便當)",
];

var luckyman = document.getElementById("luckyman");
var allman = document.getElementById("array");
var btn = document.getElementById("btn");

btn.addEventListener("click", RandArray);
let count = 0;
function RandArray() {
  let choose = getRandom(myArray.length);
  let rValue = myArray[choose];
  luckyman.innerHTML = rValue;
  count++;
  if (count % 2 != 0) {
    document.getElementById("photo1").style.display = "none";
    document.getElementById("photo2").style.display = "block";
  } else {
    document.getElementById("photo2").style.display = "none";
    document.getElementById("photo1").style.display = "block";
  }
  console.log(count);
}

function getRandom(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

allman.innerHTML = myArray;

RandArray();
