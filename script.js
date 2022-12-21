var numButton = document.querySelectorAll(".num")
var oprButton = document.querySelectorAll(".opr");

var topDisplay = document.getElementsByTagName("h3")[0];
var displayNum = document.getElementsByTagName("h1")[0];
var clearButton = document.getElementById("clr");
var equalButton = document.getElementById("compute");

var prevOperand;

const oprState = ['NONE', 'ADD', 'SUB', 'MUL', 'DIV'];
var currentState = oprState[0];

const MAX_NUM_VAL = 999999999999;

var hasDecimal = false;
var hasAnswer = false;


// Input for the numbers
numButton.forEach(number => {
    number.addEventListener('click', (e) => {

        // Clear the displayed answer number, when you type in another number.
        if (hasAnswer) 
        {
            displayNum.innerText = "";
            hasAnswer = false;
            hasDecimal = false;
        }

        // The length of the input number can't pass 6 digits.
        if (displayNum.innerText.length < 9)
        {
            if (e.target.innerText === '.')
            {
                // Makes sure there is no more than 1 decimal.
                if (!hasDecimal) 
                { 
                    displayNum.innerText += e.target.innerText;
                    hasDecimal = true;
                }
            }
            else
            {
                displayNum.innerText += e.target.innerText;
            }
        }
    })
})

// Selects which Operation State to compute.
oprButton.forEach(operator => {
    operator.addEventListener('click', (e) =>
    {
        prevOperand = parseFloat(displayNum.innerText);

        if (!prevOperand) { return; }

        hasDecimal = false;
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
    currOperand = parseFloat(displayNum.innerText);
    let answer; 

    if (!prevOperand || !currOperand) { return; }

    hasAnswer = true;

    switch(currentState) 
    {
        case oprState[1]: // addition
            answer = prevOperand + currOperand;
            break;
        case oprState[2]: // subtraction
            answer = prevOperand - currOperand;
            break;
        case oprState[3]: // multiplication
            answer = prevOperand * currOperand;
            break;
        case oprState[4]: // division
            answer = prevOperand / currOperand;
            break;
        default:
            return;
            break;
    }

    // Answer will be rounded to 2 decimal places.
    if (answer.toString().includes(".")) { answer = answer.toFixed(2); }

    // When answer is too big.
    if (answer > MAX_NUM_VAL) { answer = 'Infinity'; }

    displayNum.innerText = answer;

    topDisplay.innerText += " " + currOperand.toString() + " = ";

    currentState = oprState[0];
})


// Clear Button
clearButton.addEventListener("click", () => {
    hasAnswer = false;
    hasDecimal = false;
    displayNum.innerText= "";
    topDisplay.innerText = "";
    currentState = oprState[0];
})


