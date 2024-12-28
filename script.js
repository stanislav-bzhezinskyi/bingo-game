const root = document.querySelector(".root");
const button = document.querySelector(".button");

let numberArray = [];
let randomNum = () => Math.floor(Math.random() * 46) + 1;

root.className = 'endGame';
root.textContent = 'Lets Begin'

button.addEventListener("click", () => {
  root.className = 'root';
  randomNum();
  numberCreator();
});


button.addEventListener('mousedown', () => {
  button.classList.add('no-shadow');
  
})
button.addEventListener('mouseup', () => {
  button.classList.remove('no-shadow');
})

function numChecking(num) {
  if (numberArray.length === 0) {
    numberArray.push(num);
  } else {
    if (!numberArray.includes(num)) {
      numberArray.push(num);
    } else {
      
      numberCreator();
    }
  }
}

function numberCreator() {
  let newNum = randomNum();

  numChecking(newNum);

  if(numberArray.length >= 46) {
    root.className = 'endGame';
    button.disabled = true;
    return root.textContent = "THE END";
  }
  
  root.textContent = numberArray[numberArray.length - 1];
  
  console.log(numberArray);
}




