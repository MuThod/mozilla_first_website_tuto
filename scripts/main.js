let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');
let myImage = document.querySelector('img');
let myGreetings = document.querySelector('h2');
let originMessage = myHeading.textContent;

myHeading.onclick = function() {
    if(myHeading.textContent === 'Hello world!') {
        myHeading.textContent = originMessage;
    } else {
        myHeading.textContent = 'Hello world!';
    }
}

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/TOP-icon.png') {
        myImage.setAttribute('src', 'images/THP-icon.png');
    } else {
        myImage.setAttribute('src', 'images/TOP-icon.png');
    }
}

myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myGreetings.textContent = 'Hi ' + myName + '!';
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myGreetings.textContent = 'Hi ' + storedName + '!';
}