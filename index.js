
//Fetch html variables
var submitBtn = document.querySelector("input[type=submit]");
submitBtn.addEventListener("click",addTask);

var deleteBtn = document.querySelector("input[type=button]");
deleteBtn.addEventListener("click",deleteTask);


var inputTask = document.querySelector("#inputTask");

var inputDate = document.querySelector("#inputDate");

// var inputStatus = document.querySelector("#inputStatus");

var table = document.querySelector("#table");



/* Create a Task Object (using a constructor)
function Task(name,date,checkbox,selectMenu){
    this.name = name;
    this.date = date;
    this.checkbox = checkbox;
    this.selectMenu = selectMenu;
}
var newTask = new Task(inputTask.value,inputDate.value,checkBox,select);
*/

function addTask(e) {
   e.preventDefault();
   
   //Create task
    var taskName = document.createElement("td");
    taskName.innerText = inputTask.value;


    var taskDate = document.createElement("td");
    taskDate.innerText = inputDate.value;
   
    taskState = document.createElement("td");

    //Create checkbox
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    var taskDelete = document.createElement("td");
    taskDelete.appendChild(checkBox);
    
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


function deleteTask(e){
var boxList = document.querySelectorAll("input[type=checkbox]");
var index;
for(index=0; index<boxList.length; index++){
    if(boxList[index].checked){
        var tBody = boxList[index].parentNode.parentNode.parentNode;
        var row = boxList[index].parentNode.parentNode;
        tBody.removeChild(row);
    }
}
}