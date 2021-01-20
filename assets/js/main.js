"use strict";
var countDownTimes;
var currQuestion = 0;
let hepcoin = 50;
const vData = ["01", "02", "03", "04", "05", "06", "07", "08", "09", 10, 11, 12];
const hData = ["X", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"];
const questions = [
    `What is the name that the law calls black hat hackers?`,
    `One day you spend 20 hours on Facebook, Instagram, Youtube without working.
    One day you just lie down, play and sleep without working
    What will you feel at this moment?`,
    `What are these?`,
    `They are people with a strong voice on social media. Their words or actions will be responded to by many people. Who are they?`,
    `Hello, It’s Alice. What is function of Alice every day?`,
    `You use social network everwhere, every day, every time. 
    You feel tired, boring when you do not use social network 
    You give up your work to use the social network.
    What phenomena you in?`,
    `Every time Thuy Nhung posts on ST United Fanpage, what does she call you to do?`,
    `This is the item on Email.`,
    `What are the post shared by bloggers called?`,
    `During the covid-19 season, you go to the "Thông tin chính phủ" page to read posts about the disease situation.
    What is this action called?`,
    `This is a function on Facebook`,
    `You can call your parent when you go far.
    You can message with an old friend on Social Media
    When Mr Thang outside at Sai Gon, he also can message with every one of ST United Company. 
    So, what is the function here?`
];
const answers = [
    "cyber crimes",
    "waste time",
    "search engine",
    "influencer",
    "notification",
    "addiction",
    "interact",
    "spam",
    "the blogosphere",
    "update information",
    "add friends",
    "keep in touch"
];
const suggestAns = [
    "https://www.upsieutoc.com/images/2021/01/19/11c95277ea4ecbf5a.jpg",
    "https://www.upsieutoc.com/images/2021/01/19/2b0b317ead5a02b17.jpg",
    "https://www.upsieutoc.com/images/2021/01/19/325a8ec8b8a4592d6.jpg",
    "https://www.upsieutoc.com/images/2021/01/19/4b5e0c89adc14a820.jpg",
    "https://www.upsieutoc.com/images/2021/01/19/5.png",
    "https://www.upsieutoc.com/images/2021/01/19/66bea3f89a21fbf7d.jpg",
    "https://www.upsieutoc.com/images/2021/01/19/7.png",
    "https://www.upsieutoc.com/images/2021/01/19/8.png",
    "https://www.upsieutoc.com/images/2021/01/19/9.png",
    "https://www.upsieutoc.com/images/2021/01/19/10362cd621bd24b468.jpg",
    "https://www.upsieutoc.com/images/2021/01/19/111408978396ffacf4.png",
    "https://www.upsieutoc.com/images/2021/01/19/1290fb78d295d995ba.png",
];
const locationAns = [
    "i",
    "g",
    "c",
    "f",
    "g",
    "h",
    "i",
    "k",
    "e",
    "b",
    "a",
    "e",
];

const wrapGame = document.querySelector('.content__left-game');
let listSquare = "";
const eleMin = document.querySelector('#minutes');
const eleSe = document.querySelector('#seconds');

vData.map(itemV => {
    let index = 0;
    hData.map(itemH => {
        if (itemH === "X") {
            listSquare += `<button class="item item_btn" data="${itemV}">${itemV}</button>`;
        } else if (locationAns[parseInt(itemV) - 1] <= itemH) {
            if(!answers[parseInt(itemV) - 1][index]) {
                listSquare += `<div></div>`;
            } else {
                listSquare += `<div class="item item_bor ${itemH === "k" ? "vertical" : ""}" data="${itemV}">${answers[parseInt(itemV) - 1][index]}</div>`;
            }
            index++;
        } else {
            listSquare += `<div></div>`;
        }
    });
});
wrapGame.innerHTML = listSquare;

document.querySelectorAll('.item_btn').forEach(item => {
    item.addEventListener('click', function () {
        OpenQuestion(item.getAttribute('data'));
        document.body.classList.add('modal-active');
    });
});

function OpenQuestion(id) {
    document.querySelector('.content-title').textContent = `Câu hỏi số ${id}`;
    document.querySelector('.content-question').textContent = questions[parseInt(id) - 1];
    document.querySelector('.content-suggest').src = suggestAns[parseInt(id) -1];
    document.querySelector('#question').classList.add('active');
    currQuestion = id;
    setTimeout(function(){
        const fiveMinutes = 60;
        const display = document.querySelector('#time');
        startTimer(fiveMinutes, display);
    }, 0);
}

const btnStart = document.querySelector('.modal__start');

document.querySelector('.true').addEventListener('click', function() {
    document.body.classList.remove('modal-active');
    document.querySelector('#question').classList.remove('active');
    if(currQuestion === "K") {
        document.querySelectorAll(`.vertical`).forEach(item => {
            item.classList.add('visible');
        });
        document.querySelector('#bell').style.display = "none";
    } else {
        hepcoin -= 2;
        document.querySelector(`button[data="${currQuestion}"]`).disabled = true;
        document.querySelectorAll(`div[data="${currQuestion}"]`).forEach(item => {
            item.classList.add('visible');
        });
    }
    clearInterval(countDownTimes);
    document.querySelector('#time').textContent = "01:00";
});

document.querySelector('.false').addEventListener('click', function() {
    document.body.classList.remove('modal-active');
    document.querySelector('#question').classList.remove('active');
    clearInterval(countDownTimes);
    document.querySelector('#time').textContent = "01:00";
});

btnStart.addEventListener('click', function () {
    btnStart.parentElement.classList.add('fade');
    setTimeout(function () {
        btnStart.parentElement.classList.add('indexDown');
    }, 700);
});

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    countDownTimes = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        if(minutes === "00" && seconds === "00") {
            clearInterval(countDownTimes);
        }
    }, 1000);
}

document.querySelector('#bell').addEventListener('click', function() {
    document.body.classList.add('modal-active');
    document.querySelector('.content-title').textContent = `Câu hỏi hàng dọc`;
    document.querySelector('.content-question').textContent = `Số hepCoin hiện tại : ${hepcoin}`;
    document.querySelector('.content-suggest').src = ``;
    document.querySelector('#question').classList.add('active');
    currQuestion = "K";
    setTimeout(function(){
        const fiveMinutes = 60;
        const display = document.querySelector('#time');
        startTimer(fiveMinutes, display);
    }, 1000);
});