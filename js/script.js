//variables
let todoBoton = document.getElementById("boton-ingreso");
let todoField = document.getElementById("caja-txt");
let todoContainer = document.getElementById("todo-cont");
let html = '';
//listener
todoBoton.addEventListener("click", function () {
  let valorTodo = todoField.value;

  if (valorTodo != "") {
    html += '<div class="caja-todo"><p>'+ valorTodo +'</p></div>';
    todoContainer.innerHTML = html;
    todoField.value = "";
  }
});