console.log('Ready to go!');

// NOTE: Use Arrow function syntax when adding event listeners!
//=>
// PRO TIP: A string is nothing more than an array of characters
const main = () => {


  // Exercise 1:
  // Create a page with a blank label and a text area. 
  const textArea = document.getElementById('text');
  const textOutput = document.getElementById('output');
  //console.log(textArea);
  // When someone types into the text area, change the label to show what the person has typed.
  //use change event
  textArea.addEventListener('change', e => {
    //make a place for the changes to go
    textOutput.textContent = textArea.value;
  })

  //   Exercise 2:
  // Using the exercise above, replace the user's typing with the string below. 
  // Each time they press a key, a letter from the string below should display in the label instead. (keydown event)
  // There's no need to have the text start over from the beginning.

  let codeCrewString = "Code School is a hands-on class designed to train individuals to be entry-level software developers within a six-month course. The minimum education requirement is at least a high school diploma or GED. Students work in a small classroom setting and use real-word technologies to learn the fundamentals of coding, app development, the leadership, and the life skills needed for a successful career and job market competitiveness."
  textArea.addEventListener('keydown', e => {
    textOutput.textContent = codeCrewString; //make this print out one letter at a time
  })

 //textArea.addEventListener('keyup')



  // Exercise 3:
  // Enhance your solution by creating a reset button that will erase everything from the label
  //  so the user can start over.
resetButton = document.getElementById('reset-button'); 
//reset button is in html

// function resetForm(){
//   resetButton.reset()
// }
// console.log(resetForm);

  // Exercise 4: Repeating timer
  // Create a button with the text Start Countdown!.
  //  When the User clicks the button, display a countdown sequence in the browser 
  //  as an <h2> from 10 to LIFTOFF!!. 
  //  Display each number during the countdown each second (1000 ms),
  //   leading up to the word LIFTOFF!!!. Be sure to stop the timer once liftoff achieved.


  //   Challenge 1
  // Create additional strings and load them in an array
  // then randomly select one of the three each time the page is reloaded.




};

main();
