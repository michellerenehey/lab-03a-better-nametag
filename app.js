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


// add event listener for name inputs
buttonSubmit.addEventListener('click', ()=> {
  let newName =nameInput.value;
  nameHolder.textContent = newName
  let newPronoun = pronounInput.value;
  pronounHolder.textContent = newPronoun;
  colorChangeHead.style.backgroundColor = tagColor.value;
  colorChangeFoot.style.backgroundColor = tagColor.value;
});

