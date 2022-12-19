var numButton = document.querySelectorAll(".num")
var oprButton = document.querySelectorAll(".opr");

var topDisplay = document.getElementsByTagName("h3")[0];
var displayNum = document.getElementsByTagName("h1")[0];
var clearButton = document.getElementById("clr");
var equalButton = document.getElementById("compute");

var prevOperand;

const oprState = ['NONE', 'ADD', 'SUB', 'MUL', 'DIV'];
var currentState = oprState[0];


// Input for the numbers
numButton.forEach(number => {
    number.addEventListener('click', (e) => {


        // The length of the input number can't pass 6 digits.
        if (displayNum.innerText.length < 9)
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

        if (!prevOperand) { return; }

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

        topDisplay.innerText = prevOperand.toString() + " " + e.target.innerText;

    })
})

// Equals button that will compute the math operation.
equalButton.addEventListener("click", () => {
    currOperand = parseInt(displayNum.innerText);
    let answer; 

    if (!prevOperand || !currOperand) { return; }

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
        default:
            break;
    }

    topDisplay.innerText += " " + currOperand.toString() + " = ";

    currentState = oprState[0];
})


// Clear Button
clearButton.addEventListener("click", () => {
    displayNum.innerText= "";
    topDisplay.innerText = "";
    currentState = oprState[0];
})


