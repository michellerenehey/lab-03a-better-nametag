// import functions and grab DOM elements
  
  //inputcolors DOM
  const nameInputOrange = document.getElementById('name-orange');
  const nameInputBlue = document.getElementById('name-blue') 
  const nameInputGreen = document.getElementById('name-green')
  
  //button colors DOM
  const buttonOrange = document.getElementById('generate-orange');
  const buttonBlue = document.getElementById('generate-blue');
  const buttonGreen = document.getElementById('generate-green');  
  const nameEntered = document.getElementById('name-entered');
  const colorChangeHead = document.getElementById('header-color');
  const colorChangeFoot = document.getElementById('footer-color')
  const buttonReset = document.getElementById('reset'); 
  
  //pronouns DOM
  const buttonSheHer = document.getElementById('generate-she-her');
  const buttonHeHim = document.getElementById('generate-he-him');
  const buttonTheyThem = document.getElementById('generate-they-them');
  const buttonSheThey = document.getElementById('generate-she-they');
  const buttonHeThey = document.getElementById('generate-he-they');
  const pronounSelected = document.getElementById('pronoun-selected')
  
  // set event listeners 
  buttonOrange.addEventListener('click', ()=>{
    let newNameOrange = nameInputOrange.value;
    nameEntered.textContent = newNameOrange;
    colorChangeHead.style.backgroundColor = "orange";
    colorChangeFoot.style.backgroundColor = "orange";
  });

  buttonBlue.addEventListener('click', () => {
    let newNameBlue = nameInputBlue.value; 
    nameEntered.textContent = newNameBlue;
    colorChangeHead.style.backgroundColor = "blue";
    colorChangeFoot.style.backgroundColor = "blue";
  });

  buttonGreen.addEventListener('click', () => {
    let newNameGreen = nameInputGreen.value; 
    nameEntered.textContent = newNameGreen;
    colorChangeHead.style.backgroundColor = "green";
    colorChangeFoot.style.backgroundColor = "green";
  });

  //reset
  buttonReset.addEventListener('click', () => {
    colorChangeHead.style.backgroundColor = "red";
    colorChangeFoot.style.backgroundColor = "red";
    nameEntered.textContent = '';
    pronounSelected.textContent = '';
  });
  
  //pronouns
  buttonSheHer.addEventListener('click', () => {
    let pronoun1 = "she/her"; 
    pronounSelected.textContent = pronoun1;
  });

  buttonHeHim.addEventListener('click', () => {
    let pronoun2 = "he/him"; 
    pronounSelected.textContent = pronoun2;
  });

  buttonTheyThem.addEventListener('click', () => {
    let pronoun3 = "they/them"; 
    pronounSelected.textContent = pronoun3;
  });

  buttonSheThey.addEventListener('click', () => {
    let pronoun4 = "she/they"; 
    pronounSelected.textContent = pronoun4;
  });

  buttonHeThey.addEventListener('click', () => {
    let pronoun5 = "he/they"; 
    pronounSelected.textContent = pronoun5;
  });

  // what are we doing?
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  
  // when the button is clicked, 
  // get the value of the input
  // replace the text in the nametag 
  // with the value in the input field
  // whats the event we're listening for? CLICK!