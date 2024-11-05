/* Iteration 4: Make the Canvas App Functional */
const imgfaceplate = document.getElementById("face-plate")
const buttonfaceplate = document.getElementById("btnFace-plate")
buttonfaceplate.oninput = () => {
  imgfaceplate.style.fill=buttonfaceplate.value;
}

const imgeyes = document.getElementById("eyes")
const buttoneyes = document.getElementById("btnEyes")
buttoneyes.oninput = () => {
  imgeyes.style.fill=buttoneyes.value;
}

const imghelmet = document.getElementById("helmet")
const buttonhelmet = document.getElementById("btnHelmet")
buttonhelmet.oninput = () => {
  imghelmet.style.fill=buttonhelmet.value;
}

const imgback = document.getElementById("background")
const buttonback = document.getElementById("btnbackground")
buttonback.oninput = () => {
  imgback.style.fill=buttonback.value;
}
