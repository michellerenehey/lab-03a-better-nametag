// grab the input values
const nameInput = document.getElementById('name');
const pronounInput = document.getElementById('pronoun');

// grab the submit button
const buttonSubmit = document.getElementById('submit');

// grab where the name & pronoun needs to go 
const nameHolder = document.getElementById('name-placeholder');
const pronounHolder = document.getElementById('pronoun-placeholder');

// grab color input 
const tagColor = document.getElementById('tag-color'); 
const colorChangeHead = document.getElementById('header-color');
const colorChangeFoot = document.getElementById('footer-color');

// grab fonts
const fontChanger = document.getElementById('font-changer'); 


// add event listener for name inputs
buttonSubmit.addEventListener('click', ()=> {
  let newName =nameInput.value;
  nameHolder.textContent = newName
  let newPronoun = pronounInput.value;
  pronounHolder.textContent = newPronoun;
  colorChangeHead.style.backgroundColor = tagColor.value;
  colorChangeFoot.style.backgroundColor = tagColor.value;
  if (fontChanger.value === 'all-caps') {
    nameHolder.classList.add("uppercase"), 
    pronounHolder.classList.add("uppercase");
  } else if (fontChanger.value === 'green-font') {
    nameHolder.classList.add("green-font"), 
    pronounHolder.classList.add('green-font')
  };

  // if the font-changer that a user selects is "all-caps-font-chager"
    
    //elif the font-changer .... is "green"
    // change the font to green
    // else do nothing.
});

