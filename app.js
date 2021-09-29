// import functions and grab DOM elements
  
  const nameInput = document.getElementById('name');
  const button = document.getElementById('generate');
  const firstName = document.getElementById('first-name');
  

  // set event listeners 
  button.addEventListener('click', ()=>{
    let newName = nameInput.value;
    firstName.textContent = newName;
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