// DOM ELEMENT REFERENCES
const hobbiesResult = document.getElementById('hobbies-result');
const transportResult = document.getElementById('transport-result');
const musicResult = document.getElementById('music-result');
const musicDropDown= document.getElementById('music-preference');


const radioButtons = document.getElementsByName('transport-method');


// set default for drop down menu
musicResult.textContent = musicDropDown.value;
/*
 * CHECKBOX LISTENERS
 */
document.getElementById('sports-checkbox').addEventListener('change', ($event) => {
  if ($event.target.checked) {
    hobbiesResult.children[0].classList.remove('text-secondary');
  }
  else {
    hobbiesResult.children[0].classList.add('text-secondary');
  }
});

document.getElementById('games-checkbox').addEventListener('change', ($event) => {
  if ($event.target.checked) {
    hobbiesResult.children[1].classList.remove('text-secondary');
  }
  else {
    hobbiesResult.children[1].classList.add('text-secondary');
  }
});

document.getElementById('music-checkbox').addEventListener('change', ($event) => {
  if ($event.target.checked) {
    hobbiesResult.children[2].classList.remove('text-secondary');
  }
  else {
    hobbiesResult.children[2].classList.add('text-secondary');
  }
});

// radio button listener events
for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('change', ($event) => {
            transportResult.textContent = $event.target.value;

    });
    
}

// for drop down menu
musicDropDown.addEventListener('change', ($event) => {
    musicResult.textContent = $event.target.value;
})

