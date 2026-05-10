
const counterValueElement = document.getElementById('counterValue');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');
const incrementBtn = document.getElementById('incrementBtn');


let counter = 0;


function updateDisplay() {
    counterValueElement.textContent = counter;
    
    
    counterValueElement.classList.add('changed');
    
   
    setTimeout(() => {
        counterValueElement.classList.remove('changed');
    }, 200);
}


function increment() {
    counter++;
    updateDisplay();
}


function decrement() {
    counter--;
    updateDisplay();
}


function reset() {
    counter = 0;
    updateDisplay();
}


incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);


document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case '+':
        case '=':
            increment();
            break;
        case '-':
            decrement();
            break;
        case 'r':
        case 'R':
            reset();
            break;
        case '0':
            reset();
            break;
    }
});


console.log('Counter app initialized!');