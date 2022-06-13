// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.

// select the form from the dom using a selector method and store in variable
// select by id, use querySelector
// add event listener to the form for submit event
// prevent page from refreshing on form submit

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // debugger;
  // console.log("submitted");
  // As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.
  // select text input
  let input = document.querySelector("input");

  // create list element to append to todolist
  let li = document.createElement("li");

  // update textContent of li
  li.innerText = input.value;
  console.log(input.value);
  // append input to todolist
  // select unordered list
  let list = document.querySelector("ul");
  // append li to ul
  list.append(li);

  // rest the form
  // form.reset()

  // A delete function that will remove tasks from your list

  let btn = document.createElement("button");
  // update text value of button
  btn.innerText = "X";

  // add button to li

  li.appendChild(btn);

  // add event listener to button

  // persist new task to db with POST request
  // create config object for fetch
  let config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      content: input.value,
    }),
  };

  // POST fetch request
  let id;
  fetch("http://localhost:3000/tasks", config)
    .then((res) => res.json())
    .then((task) => (id = task.id));
  event.target.reset();

  // btn.addEventListener("click", function (event) {
  //   // console.log("clicked");
  //   li.remove();
  //   // event.target.parentElement.remove();
  //   // persist deletion of task with DELETE request
  //   // create config object for fetch
  //   let config = {
  //     method: "DELETE",
  //   };
  //   // DELETE fetch request
  //   console.log(id);
  //   fetch(`http://localhost:3000/tasks/${id}`, config);
  // });
  btn.addEventListener("click", () => {
    deleteTask(id);
  });
});

// user stories

// when page loads, user sees form to create todolist item as well as the todos list

// when a user submits the form, the todo is appended to the list

// when a user clicks the 'X' button on a list element it deletes that element

// users can click a button and delete all tasks
// select the div that contains the todo list
let listDiv = document.querySelector("#list");
let ul = document.querySelector("ul");
// create the button
let deleteAll = document.createElement("button");
deleteAll.innerText = "Delete all ToDos";
// add the button to the div
listDiv.insertBefore(deleteAll, listDiv.firstChild);
// add event listener to the button
deleteAll.addEventListener("click", function () {
  console.log("clicked");
  // ul.innerHTML = "";
  let lis = document.querySelectorAll("li");
  lis.forEach((li) => {
    li.remove();
  });
});

// when page loads display all of the existing tasks
// fetch all the tasks

function deleteTask(id) {
  event.target.parentElement.remove();
  let config = {
    method: "DELETE",
  };
  // DELETE fetch request
  console.log(id);
  fetch(`http://localhost:3000/tasks/${id}`, config);
}
const fetchTasks = () => {
  fetch("http://localhost:3000/tasks")
    .then((res) => res.json())
    .then((tasks) => {
      tasks.forEach((task) => {
        let li = document.createElement("li");
        li.innerText = task.content;
        let list = document.querySelector("ul");
        list.append(li);
        let btn = document.createElement("button");
        btn.innerText = "X";
        li.appendChild(btn);
        // btn.addEventListener("click", function (event) {
        //   li.remove();
        //   let config = {
        //     method: "DELETE",
        //   };
        //   // DELETE fetch request
        //   console.log(task.id);
        //   fetch(`http://localhost:3000/tasks/${task.id}`, config);
        // });
        btn.addEventListener("click", () => {
          deleteTask(task.id);
        });
      });
    });
};

fetchTasks();

// delete tasks from the DOM and the DB
// remove li from the DOM
// send delete request to db

// when a user submits a new task it appears on the DOM and it POSTs to DB
// select form
// add event listener to form
// select input
// updating the DOM
// create li
// update li innertext
// select ul
// append li
//updating the DB
// create config object
// POST request
