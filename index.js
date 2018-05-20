var submitBtn = document.querySelector("input");
var inputTask = document.querySelector("#inputTask");

var inputDate = document.querySelector("#inputDate");

var inputStatus = document.querySelector("#inputStatus");

var table = document.querySelector("#table");
//var list = document.querySelector("#taskList");

function addTask(e) {
   e.preventDefault();
    var taskName = document.createElement("td");
    
    var taskDate = document.createElement("")
    
    task.innerText = inputTask.value

        var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    
    var newTableRow = document.createElement("tr");
    
    newTableRow.appendChild(task);
    table.appendChild(newTableRow);

    inputTask.value = "";
 
}


