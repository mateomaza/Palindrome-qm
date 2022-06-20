const btn = document.getElementById("button")

function getString() {
    let txt = document.getElementById("txt").value
    let validString = toString(txt)
    if (typeof validString == String) {
        let reversed_array = reverseArray(string)
        displayReversed(reversed_array)
    } else {
        alert("Input must be a string of 2 or more characters")
    }
}

// ex: "hello world"
function reverseArray() {
    let new_array = []
    for (let i = string.lenght - 1; i >= 0; i--) {
        new_array += string[i]

    }

}

function displayReversed() {

}

btn.addEventListener("click", getString)