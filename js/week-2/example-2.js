// button change text

const button1 = document.getElementById('btn-1');

button1.addEventListener('click', () => {
    button1.innerText = button1.innerText == 'Click' ? 'Clicked' : 'Click'
});


// button add text

const button2 = document.getElementById('btn-2');
const input1 = document.getElementById('input-1');
const display = document.getElementById('display');

button2.addEventListener('click', () => {
    if (input1.value) {
        display.innerHTML = `${display.innerHTML} <br> ${input1.value}`;
        input1.value = '';
    }
})


// input 2

const input2 = document.getElementById('input-2');
const input3 = document.getElementById('input-3');

input2.addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/[^0-9\.\-]/g, '');
});

let previousValue = "";
input3.addEventListener('input', (event) => {
    const currentValue = event.target.value;
    const isValid = /^(?:-?|-?\d+\.?\d*)$/.test(currentValue);

    if(isValid){
        previousValue = currentValue
    }else{
        event.target.value = previousValue;
    }
});