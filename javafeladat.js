




const setBg = () => {
  const changehere = 
  Math.floor(Math.random()*16777215).toString(16);
  document.button.style.backgroundcolor = "#" + changehere;
  color.innerHTML = "#" + changehere;
}

change.addEventListener("click", setBg);
setBg();