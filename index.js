
//Fetch html variables and add respective eventListeners
var form = document.querySelector("form");
form.addEventListener("submit", addTask);

var deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener("click", deleteTask);

var editBtn = document.getElementById("edit");
editBtn.addEventListener("click", edit);

var submitBtn = document.querySelector("button[type=submit]");

var saveBtn = document.getElementById("save");
saveBtn.addEventListener("click", save);

var inputTask = document.querySelector("#inputTask");

var inputDate = document.querySelector("#inputDate");

var table = document.querySelector("#table");

var taskHeader = document.querySelector("#taskHeader");
var dateHeader = document.querySelector("#dateHeader");
var stateHeader = document.querySelector("#stateHeader");
var headers = document.querySelectorAll(".header");
var index;
for (index = 0; index < headers.length; index++) {
    headers[index].addEventListener("click", sort);
}


/* Create a Task Object (using a constructor)
function Task(name,date,checkbox,selectMenu){
    this.name = name;
    this.date = date;
    this.checkbox = checkbox;
    this.selectMenu = selectMenu;
}
var newTask = new Task(inputTask.value,inputDate.value,checkBox,select);
*/

//Create columns arrays representing table columns
var deleteColumn = [];
var nameColumn = [];
var dateColumn = [];

function addTask(e) {
    e.preventDefault();

    //Create task
    var taskName = document.createElement("td");
    taskName.innerText = inputTask.value;
    nameColumn.push(taskName);

    var taskDate = document.createElement("td");
    taskDate.innerText = inputDate.value;
    dateColumn.push(taskDate);

    taskState = document.createElement("td");

    //Create checkbox
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    var taskDelete = document.createElement("td");
    taskDelete.appendChild(checkBox);
    deleteColumn.push(taskDelete);
    taskDelete.style.visibility = "hidden";


    var select = document.createElement("select");
    var NotStartedOption = document.createElement("option");
    NotStartedOption.innerText = "Not Started";
    var InProgressOption = document.createElement("option");
    InProgressOption.innerText = "In Progress";
    var CompletedOption = document.createElement("option");
    CompletedOption.innerText = "Completed";
    select.appendChild(NotStartedOption);
    select.appendChild(InProgressOption);
    select.appendChild(CompletedOption);
    taskState.appendChild(select);

    //Add task to table
    var newTableRow = document.createElement("tr");
    newTableRow.appendChild(taskName);
    newTableRow.appendChild(taskDate);
    newTableRow.appendChild(taskState);
    newTableRow.appendChild(taskDelete);
    table.appendChild(newTableRow);

    inputTask.value = "";
    inputDate.value = "";

}


function deleteTask(e) {
    var boxList = document.querySelectorAll("input[type=checkbox]");
    var index;
    for (index = 0; index < boxList.length; index++) {
        if (boxList[index].checked) {
            var tBody = boxList[index].parentNode.parentNode.parentNode;
            var row = boxList[index].parentNode.parentNode;
            tBody.removeChild(row);
        }
    }
}

var newNameColumn = [];

function edit(e) {

    //Set delete column to visible (iterate throw each delete cell)
    var deleteHeader = document.getElementById("delete");
    deleteHeader.style.visibility = "visible";

    var index;
    for (index = 0; index < deleteColumn.length; index++) {
        deleteColumn[index].style.visibility = "visible";
    }

    //iterate through each name cell
    for (index = 0; index < nameColumn.length; index++) {

        var inputName = document.createElement("input");
        inputName.type = "text";

      
        inputName.defaultValue = nameColumn[index].innerText;
    
        inputName.style.margin = "4px";
        nameColumn[index].parentNode.replaceChild(inputName,nameColumn[index]);
        nameColumn.pop();
        nameColumn.push(inputName);

     //   newNameColumn.push(inputName);
    }



}


function save(e) {
    var index;
    for(index=nameColumn.length-1; index>=0;index--) {
      console.log("nameColumn " + nameColumn[index].value);

      var savedName = document.createElement("td");
      savedName.innerText = nameColumn[index].value;
      console.log(savedName);
      nameColumn[index].parentNode.replaceChild(savedName,nameColumn[index]);
      nameColumn.pop();
      nameColumn.push(savedName);
      


    }
}

function sort(e) {
    console.log("sorting");
}