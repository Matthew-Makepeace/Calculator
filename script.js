var numButton = document.querySelectorAll(".num")

var displayNum = document.getElementsByTagName("h1")[0];
var clearButton = document.getElementById("clr");

// Input for the numbers
numButton.forEach(number => {
    number.addEventListener('click', (e) => {
        // The length of the input number can't pass 6 digits.
        if (displayNum.innerText.length < 6)
        {
            displayNum.innerText += e.target.innerText;
        }
    })
})

// Clear Button
clearButton.addEventListener("click", function() {
    displayNum.innerText= "";
})


