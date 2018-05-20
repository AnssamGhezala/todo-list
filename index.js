
//Fetch html variables
var submitBtn = document.querySelector("input[type=submit]");
submitBtn.addEventListener("click",addTask);

var inputTask = document.querySelector("#inputTask");

var inputDate = document.querySelector("#inputDate");

var inputStatus = document.querySelector("#inputStatus");

var table = document.querySelector("#table");

function addTask(e) {
   e.preventDefault();

    //Create task
    var taskName = document.createElement("td");
    taskName.innerText = inputTask.value;

    var taskDate = document.createElement("td");
    taskDate.innerText = inputDate.value;
   
    //Create checkbox
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    var taskStatus = document.createElement("td");
    taskStatus.appendChild(checkBox);
    
    //Add task to table
    var newTableRow = document.createElement("tr");
    newTableRow.appendChild(taskName);
    newTableRow.appendChild(taskDate);
    newTableRow.appendChild(taskStatus);
    table.appendChild(newTableRow);
   
    inputTask.value = "";
    inputDate.value = "";
 
}


