function clicou() {
  const button = document.querySelector(".botao");
  const body = document.querySelector("body");


if(body.classList.contains('dark-theme')) {
  body.classList.remove('dark-theme')
  body.classList.add('light-theme')
  button.textContent = 'dark'
} else {
  body.classList.add('dark-theme')
  body.classList.remove('light-theme')
  button.textContent = 'light'
}
}
let button = document.querySelector(".botao");
button.addEventListener("click", () => {
  clicou();
});

function click() {
  const ul = document.querySelector("ul");

  let newLi = document.createElement("li");
  newLi.innerText = "item adicionado";
  ul.prepend(newLi);
  ul.after(newLi);
}
let buttonTwo = document.querySelector("#button");
buttonTwo.addEventListener("click", () => {
  click();
});

