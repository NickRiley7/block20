const numInput = document.querySelector('form>label>input');
const numForm = document.querySelector('form');
const numberBank = document.querySelector('#numberBank>output')
const oddsBank = document.querySelector('#odds>output');
const evensBank = document.querySelector('#evens>output');
const sortOneBtn = document.getElementById('sortOne');
const sortAllBtn = document.getElementById('sortAll');

const numbers = [];

numForm.addEventListener('submit', (event) => {
    event.preventDefault();
    numbers.push(numInput.value); 
    numInput.value = '';  

    updateBanks();
});

sortOneBtn.addEventListener('click', () => {
});

sortAllBtn.addEventListener('click', () => {
    numbers.sort();
    updateBanks();
});

function updateBanks() {
    numberBank.textContent = numbers.join(', '); 

    const odds = ['1', '3', '5', '7', '9'];
    const sortedOdds = numbers.filter((n) => odds.includes(n[n.length-1]));
    oddsBank.textContent = sortedOdds.join(', ');

    const evens = ['0', '2', '4', '6', '8'];
    const sortedEvens = numbers.filter((n) => evens.includes(n[n.length-1]));
    evensBank.textContent = sortedEvens.join(', ');
}