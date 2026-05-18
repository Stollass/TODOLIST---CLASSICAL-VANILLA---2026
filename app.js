// Initialisation d'un localStorage avec des todos
// localStorage.todos = JSON.stringify([
//   { id: 1, content: "Tâche 1", completed: true },
//   { id: 2, content: "Tâche 2", completed: false },
// ]);


const todos = JSON.parse(localStorage.todos) || [];


// ÉLÉMENTS UTILES DU DOM
const appElement = document.querySelector(".todoapp");
const addInputElement = appElement.querySelector(".new-todo");
const todosContainer = appElement.querySelector(".todo-list");
const notCompletedCountElement = appElement.querySelector(".todo-count span");


// AFFICHAGE DES TODOS INITIALES
todos.forEach((item) => {
  const newItem = document.createElement("div");
  todosContainer.append(newItem);
  newItem.outerHTML = `
        <li data-id="${item.id}" class="${item.completed ? "completed" : ""}">
            <div class="view">
              <input class="toggle" type="checkbox" ${item.completed ? "checked" : ""} />
                <label>${item.content}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="${item.content}" />
          </li>
    `;
});

// Modifier le contenu du notCompletedCountElement 
notCompletedCountElement.innerText = todos.filter(
    (todo) => !todo.completed,
).length;