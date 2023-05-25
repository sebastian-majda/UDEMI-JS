let todoInput; //miejsc gdzie uzytkownik wpisuje tresc zadania
let errorInfo; // info o braku zadan koniecznosc wprowadzenia tekstu
let addBtn; //przycisk add
let ulList; //lista zadan, tagi ul

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
  //nadawanie zasłuchiwania
};

document.addEventListener("DOMContentLoaded", main);
//po załadowaniu całej strony, otwór funkcje maina
