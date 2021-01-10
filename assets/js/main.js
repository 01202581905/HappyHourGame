"use strict";
const vData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const hData = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p"];
const wrapGame = document.querySelector('.content__left-game');
let listSquare = "";
const eleMin = document.querySelector('#minutes');
const eleSe = document.querySelector('#seconds');

vData.map(itemV => {
    hData.map(itemH => {
        listSquare += `<div class="item" data="${itemV}${itemH}">A</div>`;
    });
});
wrapGame.innerHTML = listSquare;

const btnStart = document.querySelector('.modal__start');
btnStart.addEventListener('click', function() {
    btnStart.parentElement.classList.add('fade');
    setTimeout(function() {
        timeCountDown();
        btnStart.parentElement.classList.add('indexDown');
    }, 1000);
});
const timeCountDown = () => {
    
};