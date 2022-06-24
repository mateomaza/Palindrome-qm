// We call the HTML elements we need

const btn = document.getElementById("button")
const para1 = document.getElementById("p1")
const head2 = document.getElementById("p2")
const style = document.getElementById("alert")


// Controller

function getString() {

    let str = document.getElementById("string").value;

    if (str.length > 1) {

        let reversedString = reverseLoop(str);

        displayReversed(str, reversedString);
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

function displayReversed(string, reversed) {

    let regex = /[^a-z0-9]/gi;

    let reversedFiltered = reversed.toLowerCase();
    reversedFiltered = reversedFiltered.replace(regex, "");

    let stringFiltered = string.toLowerCase();
    stringFiltered = stringFiltered.replace(regex, "");


    
    if (stringFiltered == reversedFiltered) {
        p1.innerHTML = `This is a palindrome! <br><span class="fs-5 fw-normal">
        (at least if you actually typed words...)</span>`;
        p2.innerHTML = `Your reverse string is: ${reversed}`;
        style.classList.remove("alert-primary");
        style.classList.add("alert-info");

    } else {
        p1.innerHTML = `This is is not a palindrome`;
        p2.innerHTML = `Your reversed string is: ${reversed}`;
        style.classList.remove("alert-info");
        style.classList.add("alert-primary");
    }

    style.classList.remove("invisible");
}


btn.addEventListener("click", getString)