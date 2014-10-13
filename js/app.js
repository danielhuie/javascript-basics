"use strict";

var name = 'Daniel';
var fruits = ['apple', 'pear', 'kiwi', 'watermelon', 'banana'];
//alert('Hello ' + name);

// document object refers to the current page we are modifying
// replacing function name with annonymous function is what professionals do, better than calling function outside
document.addEventListener('DOMContentLoaded', function() {
    // need to declare variable outside for-loop or else i will be initialized everytime the loop iterates
    var i;
    var fruitListElem = document.getElementById('fruit-list');
    var fruitLi;
    var msgElem = document.getElementById('message');
    msgElem.innerHTML = 'Hello ' + name;
    var animalSound = document.getElementById('animal-sound');


    for (i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
        fruitLi = document.createElement('li');
        fruitLi.innerHTML = fruits[i];
        fruitListElem.appendChild(fruitLi);
    }

    var animalPic = document.getElementById('animal-picture');
    animalPic.addEventListener('click', function() {
        msgElem.innerHTML = 'Meow!';
        animalSound.play();
    });

    animalSound.addEventListener('ended', function() {
        msgElem.innerHTML = '&nbsp;';
    });

    window.setInterval(function() {
        document.getElementById('clock').innerHTML = new Date().toLocaleString();
    }, 1000);
});
