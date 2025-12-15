/*****************************************************
 *  DOM MANIPULATION EXAMPLES USING JAVASCRIPT
 * ---------------------------------------------------
 *  This file demonstrates:
 *   ✓ Selecting and modifying DOM elements
 *   ✓ Creating and adding new elements to the page
 *   ✓ Changing CSS styles with JavaScript
 *   ✓ Handling events (like button clicks)
 *
 *  NOTES:
 *   - `document` is a global object representing the
 *     currently loaded HTML page in the browser.
 *   - `#` means "select element by ID"
 *   - `.` means "select element by class"
 *****************************************************/


/* ---------------------------------------------------
   Creating New Elements
--------------------------------------------------- */

// Creates a new <h3> element in memory (not yet on page)
let h3Element = document.createElement('h3');

// Sets the text content of the <h3>
h3Element.textContent = "Hello World!";


// Creates a new <h2> element
let h2Element = document.createElement('h2');

// Sets the text of the <h2>
h2Element.textContent = "H2 Test";

// Appends the <h2> into the <body>, making it visible in the page
document.body.appendChild(h2Element);


/* ---------------------------------------------------
   Selecting Existing Elements
--------------------------------------------------- */

// Selects an element with id="div1" using CSS selector
let divContainer = document.querySelector('#div1');


/* ---------------------------------------------------
   Modifying Styles
--------------------------------------------------- */

// Changes the text color of #div1
divContainer.style.color = "yellow";

// Adds the <h3> we created earlier into #div1
divContainer.appendChild(h3Element);

// Changes the background color of the whole page
document.body.style.backgroundColor = "lightblue";


/* ---------------------------------------------------
   Removing Elements
--------------------------------------------------- */

// Removes #div1 from the body completely
// (The element stops being displayed)
document.body.removeChild(divContainer);


/* ---------------------------------------------------
   Event Handling
--------------------------------------------------- */

// Function that will run when the button is clicked
function showMessage() {
    console.log('Button was clicked!');
    alert("Button Clicked!");
}

// Ensures JS only runs AFTER all HTML is fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Selects the button with id="myButton"
    let button = document.querySelector('#myButton');

    // Adds the click event listener to the button,
    // telling it to run showMessage() when clicked
    button.addEventListener('click', showMessage);
});