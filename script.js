class Calculator {
    constructor(preOperAndTextElement, curOperAndTextElement){
        this.preOperAndTextElement = preOperAndTextElement
        this.curOperAndTextElement = curOperAndTextElement
        this.clear()
    }
    
    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete(){

    }

    appendNumber(number){
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation){
        
    }

    compute(){

    }

    updateDisplay(){
        this.curOperAndTextElement.innerText = this.currentOperand
    }

}

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operation]')
const deleteButton = document.querySelector('[data-delete]')
const equalsButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-all-clear]')
const preOperAndTextElement = document.querySelector('[data-previous-operand]')
const curOperAndTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(preOperAndTextElement, curOperAndTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})