function aggiungiTask() {
  const nuovoTask = document.createElement("li");
  nuovoTask.innerText = document.getElementById("newTask").value;
  const contenitore = document.querySelector("ul");
  contenitore.appendChild(nuovoTask);
  event.preventDefault();
}

const pulsante = document.querySelector("button");
pulsante.addEventListener("click", aggiungiTask);
nuovoTask.addEventListener("click", () => toggleStrikethrough(nuovoTask));

const listaTask = document.getElementsByTagName("ul li");
listaTask.style.textDecoration = "line-through";

const tasks = nuovoTask.value;
tasks.addEventListener("click", function (event) {
  if (
    event.target.tagName === "BUTTON" &&
    event.target.classList.contains("delete")
  ) {
    event.target.parentElement.remove();
  }
});
