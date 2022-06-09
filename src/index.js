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
  event.target.reset();

  // A delete function that will remove tasks from your list

  let btn = document.createElement("button");
  // update text value of button
  btn.innerText = "X";

  // add button to li

  li.appendChild(btn);

  // add event listener to button

  btn.addEventListener("click", function (event) {
    // console.log("clicked");
    li.remove();
    // event.target.parentElement.remove();
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
