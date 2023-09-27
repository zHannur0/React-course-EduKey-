"use strict"

function addTodo() {

    const todoDiv = document.createElement("div");
    todoDiv.classList = "todoDiv";

    const todoCheckbox = document.createElement("input");
    todoCheckbox.type = "checkbox";
    todoCheckbox.classList = "todoCheckbox";

    todoCheckbox.addEventListener("change", () => {
        if(todoCheckbox.checked) {
            console.log("Alaqai, you did it!");
        }else {
            console.log("UPS!");
        }
    });

    const todoText = document.createElement("p");
    const todoTextHtml = document.getElementById("todoInput").value;
    todoText.innerText = todoTextHtml;
    todoText.classList = "todoText";
    document.getElementById("todoInput").value = "";

    const todoDelete = document.createElement("button");
    todoDelete.innerText = "Delete";
    todoDelete.classList = "todoDelete";

    todoDelete.addEventListener("click", () => {
        mainDiv.removeChild(todoDiv);
    });

    todoDiv.append(todoCheckbox);
    todoDiv.append(todoText);
    todoDiv.append(todoDelete);


    const mainDiv = document.getElementById("todoList");
    mainDiv.append(todoDiv);

}

const addButton = document.getElementById("addButton");

addButton.addEventListener("click", addTodo);

