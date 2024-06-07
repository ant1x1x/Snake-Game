const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let previousInput = '';
let operator = '';
buttons.forEach(button => {
 button.addEventListener('click', () =>{
 const value = button.getAttribute('data-value');
 if(value === 'C'){
    currentInput = '';
    previousInput = '';
    operator = '';
    display.innerText = '0';
    
 } else if(value === '=') {
    if(previousInput && operator && currentInput) {
        currentInput = eval(`${previousInput}${operator}${currentInput}`);
       display.innerText = currentInput; 
       previousInput = '';
       operator = ''; 

    }
 } else if (['+', '-', '*', '/' ].includes(value)){
    if (currentInput){
        previousInput = currentInput; 
        operator = value;
        currentInput = '';
        
    }
 } else{
    currentInput += value;
    display.innerText = currentInput; 
    
 }
 })
})