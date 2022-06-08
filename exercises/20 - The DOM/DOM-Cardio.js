console.log('it works!');
// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
const myUl = document.createElement('ul');

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
const one = document.createElement('li');
one.textContent = 'One';
const two = document.createElement('li');
two.textContent = 'Two';
const three = document.createElement('li');
three.textContent = 'Three';
myUl.appendChild(one);
myUl.appendChild(two);
myUl.appendChild(three);
document.body.appendChild(myUl);

// create an image
const myImg = document.createElement('img');

// set the source to an image
myImg.src = 'http://placekitten.com/500/500';
// set the width to 250
myImg.width = 250;
// add a class of cute
myImg.classList.add('cute');
// add an alt of Cute Puppy
myImg.alt = 'Cute Kitten';
// Append that image to the wrapper
myDiv.appendChild(myImg);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const stringFragment = `
<div class="paras">
<p>Paragraph one.</p>
<p>Paragraph two.</p>
</div>`;
const myDiv2 = document.createRange().createContextualFragment(stringFragment);
console.log(myDiv2);
myUl.parentNode.insertBefore(myDiv2, myUl);

// add a class to the second paragraph called warning
const secondP = document.querySelector('.paras :nth-child(2)');
secondP.classList.add('warning');
// remove the first paragraph
const firstP = document.querySelector('.paras :first-child');
firstP.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
const generatePlayerCard = function (name, age, height) {
  const dogYears = age * 7;
  const html = `<div class="playerCard">
       <h2>${name} — ${age}</h2>
       <p>They are ${height} and ${age} years old. In Dog years this person would be ${dogYears}. That would be a tall dog!</p>
       <button class="delete">Delete</button>
     </div>`;

  const fragment = document.createRange().createContextualFragment(html);

  return fragment;
};

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cardDiv = document.createElement('div');
cardDiv.classList.add('cards');

// make 4 player cards using generatePlayerCard
const playerOne = generatePlayerCard('Rob', 45, '5\'9"');
const playerTwo = generatePlayerCard('Alena', 26, '5\'9"');
const playerThree = generatePlayerCard('Nico', 26, '2m');
const playerFour = generatePlayerCard('Laura', 32, '1.5m');

// append those cards to the div
cardDiv.appendChild(playerOne);
cardDiv.appendChild(playerTwo);
cardDiv.appendChild(playerThree);
cardDiv.appendChild(playerFour);
// put the div into the DOM just before the wrapper element
myDiv.parentNode.insertBefore(cardDiv, myDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.playerCard .delete');
// make out delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  // buttonThatGotClicked.parentElement.remove();
  buttonThatGotClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach((button) => button.addEventListener('click', deleteCard));
