const root = document.querySelector(".root");
const button = document.querySelector(".button");

let numberArray = [];
let randomNum = () => Math.floor(Math.random() * 46) + 1;

root.className = 'endGame';
root.textContent = 'Lets Begin';

function setAppHeight() {
  const app = document.getElementById('app');
  app.style.height = `${window.innerHeight}px`;
}

setAppHeight();
window.addEventListener('resize', setAppHeight);

button.addEventListener("click", () => {
  button.disabled = true;
  root.className = 'root';

  setTimeout(() => {
    button.disabled = false;
  }, 3000);
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
    speakText(numberArray[numberArray.length - 1]);
  } else {
    if (!numberArray.includes(num)) {
      numberArray.push(num);
      speakText(numberArray[numberArray.length - 1]);
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

function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-EN"; 
  speechSynthesis.speak(utterance);
}


