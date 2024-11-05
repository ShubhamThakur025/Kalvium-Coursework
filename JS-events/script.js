// Challenge 1:
let user = document.getElementById('user');
function printName() {
  user.innerHTML = 'Shubham Thakur';
}
window.onload = printName;

// Challenge 2:
let btnClick = document.getElementById('btn-click');

function changeBg() {
  btnClick.style.backgroundColor = 'lightgreen';
}

btnClick.addEventListener('click', changeBg);

// Challenge 3:

function makeSentence() {
  let name = document.getElementById('noun').value;
  let verb = document.getElementById('verb').value;
  let adverb = document.getElementById('adverb').value;
  let sentence = document.querySelector('#statement');
  sentence.innerHTML = `
    ${name} ${verb} ${adverb}
    `;
}

let buildButton = document.getElementById('build-button');
buildButton.addEventListener('click', makeSentence);

// Challenge 4.1:
let parent = document.getElementById('parent');
let child = document.getElementById('child');
let grandparent = document.getElementById('grandparent');

grandparent.addEventListener(
  'click',
  (func) => {
    console.log('Grandparent clicked');
  }
  // ,{capture:true} //For Challenge 4.2
);
parent.addEventListener(
  'click',
  (func) => {
    console.log('Parent clicked');
  }
  // {capture:true} //For Challenge 4.2
);
child.addEventListener('click', (func) => {
  console.log('Child clicked');
});

// Challenge 5:

let list = document.getElementById('category');

list.addEventListener('click', (x) => {
  console.log(x.target.id);
});
