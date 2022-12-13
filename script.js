var numButton = document.querySelectorAll(".num")
var oprButton = document.querySelectorAll(".opr");

var displayNum = document.getElementsByTagName("h1")[0];
var clearButton = document.getElementById("clr");
var equalButton = document.getElementById("compute");

var prevOperand;

const oprState = ['NONE', 'ADD', 'SUB', 'MUL', 'DIV'];
var currentState = oprState[0];


// Input for the numbers
numButton.forEach(number => {
    number.addEventListener('click', (e) => {

        //displayNum.innerText= "";

        // The length of the input number can't pass 6 digits.
        if (displayNum.innerText.length < 6)
        {
            displayNum.innerText += e.target.innerText;
        }
    })
})

// Selects which Operation State to compute.
oprButton.forEach(operator => {
    operator.addEventListener('click', (e) =>
    {
        prevOperand = parseInt(displayNum.innerText);

        displayNum.innerText = "";

        switch (e.target.innerText) 
        {
            case '+':
                currentState = oprState[1];
                break;
            case '-':
                currentState = oprState[2];
                break;
            case 'x':
                currentState = oprState[3];
                break;
            case '÷':
                currentState = oprState[4];
                break;
            default:
                break;
        }
    })
})

// Equals button that will compute the math operation.
equalButton.addEventListener("click", () => {
    currOperand = parseInt(displayNum.innerText);
    let answer; 

    switch(currentState) 
    {
        case oprState[1]: // addition
            answer = prevOperand + currOperand;
            displayNum.innerText = answer;
            break;
        case oprState[2]: // subtraction
            answer = prevOperand - currOperand;
            displayNum.innerText = answer;
            break;
        case oprState[3]: // multiplication
            answer = prevOperand * currOperand;
            displayNum.innerText = answer;
            break;
        case oprState[4]: // division
            answer = prevOperand / currOperand;
            displayNum.innerText = answer;
            break;
    }

    currentState = oprState[0];
})


// Clear Button
clearButton.addEventListener("click", () => {
    displayNum.innerText= "";
    currentState = oprState[0];
})


