// We call the HTML elements we need

const btn = document.getElementById("button")
const para = document.getElementById("p")
const style = document.getElementById("alert")


// Controller

function getString() {

    let str = document.getElementById("string").value;

    if (str.length > 1) {

        let reversedString = reverseLoop(str);

        displayReversed(reversedString, str);
    } else {
        alert("Input must be a string of 2 or more characters")
    }
}


// Logic 

function reverseLoop(string) {

    let newString = "";

    for (let index = string.length - 1; index >= 0; index--) {

        newString += string[index]
    }

    return newString;
}


//Display

function displayReversed(reversed, string) {

    
    if (string == reversed) {
        para.innerHTML = []
        para.innerHTML = `This is a palindrome! -> ${reversed}<br>(at least if you actually typed words...)`;
        style.classList.remove("alert-primary")
        style.classList.add("alert-info");

    } else {
        para.innerHTML = []
        para.innerHTML = `Your reversed string is: ${reversed}`;
        style.classList.remove("alert-info")
        style.classList.add("alert-primary");
    }

    style.classList.remove("invisible");
}


btn.addEventListener("click", getString)