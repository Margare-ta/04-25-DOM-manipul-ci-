let change = document.getElementById('change');

change.addEventListener("click", colorchange);

function colorchange() {
  let red = Math.floor(Math.random() * 256);
  let blou = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let szin = "background-color: rgb(" + red + ", " + blou + ", " + green + "); ";
  change.style = szin;
};
