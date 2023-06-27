//ponizej tworzymy puste zmienne globalne, dostep ze wszystkich funkcji i zmienne są narazie puste
let todoInput; //miejsc gdzie uzytkownik wpisuje tresc zadania
let errorInfo; // info o braku zadan koniecznosc wprowadzenia tekstu
let addBtn; //przycisk add
let ulList; //lista zadan, tagi ul
let newTodo; //nowo dodane zadanie
const main = () => {
  //wywoływanie funkcji
  prepareDomElements();
  prepareDomEvents();
};

const prepareDomElements = () => {
  //pobieranie wszystkich elementów
  todoInput = document.querySelector(".todo-input");
  errorInfo = document.querySelector(".error-info");
  addBtn = document.querySelector(".btn-add");
  ulList = document.querySelector(".todolist ul");
};

const prepareDomEvents = () => {
  addBtn.addEventListener("click", addNewToDo);
  ulList.addEventListener("click", checkClick);
  //nadawanie zasłuchiwania
};

/*
CO LISTA MA ROBIĆ
1.TWORZY NOWY ELEMENT LI
2.DODAJE NOWY ELEMENT DO LI
3.FUNKCJA ODPALANIA PRZYCISKU ADD PO CLICKU
4.PRZYCHWYTUJE TRESC Z INPUTA I UMIESZCZA W NOWO UTWORZONYM lI
5.FUNKCJA NIE DODA DO LISTY PUSTEGO TODOSA


*/

const addNewToDo = () => {
  if (todoInput.value !== "") {
    newTodo = document.createElement("li");
    newTodo.textContent = todoInput.value;
    createToolsArea();
    ulList.append(newTodo);

    todoInput.value = "";
    errorInfo.textContent = "";
  } else {
    errorInfo.textContent = "wpisz treść zadania!";
  }
};

const createToolsArea = () => {
  const toolsPanel = document.createElement("div");
  toolsPanel.classList.add("tools");
  newTodo.append(toolsPanel);

  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete");
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  editBtn.textContent = "EDIT";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

  toolsPanel.append(completeBtn, editBtn, deleteBtn);
};

//sprawdzanie czy przycisk został wciśniety( atrybut event=e)
const checkClick = (e) => {
  if (e.target.matches(".complete")) {
    console.log("completed");
    e.target.closest("li").classList.toggle("completed");
    e.target.classList.toggle("completed");
  } else if (e.target.matches(".edit")) {
    console.log("edited");
  } else if (e.target.matches(".delete")) {
    console.log("deleted");
  }
};
/// const add = (x, y) => {
//   const score = x + y;
//    showscore(score)jj;
// };
//  const showscore = (score) => {
//   console.log(`a wynik to ${score}`);
// };

// add(2, 5) ...;

document.addEventListener("DOMContentLoaded", main);
///po załadowaniu całej strony, otwórZY funkcje maina, NIE Wczesniej
