'use strict';

/** 
clean code: use .map function + create function to append array of elements
add cancel button
improve edit task state functionality

*/

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
var deleteHeader = document.getElementById("deleteHeader");


var helloName = document.getElementById("helloTaskName");
var helloDate = document.getElementById("helloTaskDate");
var helloState = document.getElementById("helloTaskSelect");
var helloDelete = document.getElementById("helloTaskDelete");

var helloSelect = document.getElementById("helloSelect");



var headers = document.querySelectorAll(".header");
var index;
for (index = 0; index < headers.length; index++) {
    headers[index].addEventListener("click", sort);
}

/*Declare variables: Columns corresponding to table columns
Two types of columns: 
    column consisting of normal cells (nameColumn with task names, stateColumn with task states...)
    column consisting of cells being edited (inputColumn with input cells, selectColumn...)
*/
var inputColumn = [];
var nameColumn = [];
nameColumn.push(helloName);

var selectColumn = [];
var stateColumn = [];
stateColumn.push(helloState);

selectColumn.push(helloSelect);

var deleteColumn = [];
deleteColumn.push(helloDelete);

var dateColumn = [];
dateColumn.push(helloDate);

var dateSelectColumn = [];
dateSelectColumn.push(document.getElementById("dateSelect"));


//Add task to table
function addTask(e) {
    e.preventDefault();


    //Create task
    var taskName = document.createElement("td");
    taskName.innerText = inputTask.value;
    nameColumn.push(taskName);

    var taskDate = document.createElement("td");
    var taskDateText = document.createElement("span");
    taskDateText.className = "date";
    taskDateText.innerText = inputDate.value;
    taskDate.appendChild(taskDateText);
    dateColumn.push(taskDate);

    var taskSelectDate = document.createElement("input");
    taskSelectDate.type = "date";
    taskSelectDate.className = "dateSelect";
    taskSelectDate.value = taskDateText.innerText;
    taskDate.appendChild(taskSelectDate);
    dateSelectColumn.push(taskSelectDate);



    //Create checkbox
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    var taskDelete = document.createElement("td");
    taskDelete.appendChild(checkBox);
    deleteColumn.push(taskDelete);
    taskDelete.style.visibility = "hidden";

    var taskState = document.createElement("td");
    var taskStateText = document.createElement("span");
    taskStateText.className = "taskStateText";
    taskStateText.innerText = "Not Started";
    taskState.appendChild(taskStateText);
    stateColumn.push(taskState);

    //Add task to table
    var newTableRow = document.createElement("tr");
    newTableRow.appendChild(taskName);
    newTableRow.appendChild(taskDate);
    newTableRow.appendChild(taskState);
    newTableRow.appendChild(taskDelete);
    table.appendChild(newTableRow);

    inputTask.value = "";
    inputDate.value = "";


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
    selectColumn.push(select);
}

//Delete a task
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



function edit(e) {
    // add classname to table
    table.className = "editTable";

    // Set delete column to visible (iterate throw each delete cell)
    deleteHeader.style.visibility = "visible";

    var index;
    for (index = 0; index < deleteColumn.length; index++) {
        deleteColumn[index].style.visibility = "visible";
    }
    
    // iterate through each name cell to transform into input cell
    for (index = 0; index < nameColumn.length; index++) {
        // Create new input element

        var nameCell = document.createElement("td");
        var inputName = document.createElement("input");
        inputName.type = "text";
        inputName.defaultValue = nameColumn[index].innerText;
        // inputName.style.margin = "4px";
        nameCell.appendChild(inputName);

        //replace current name cell with input cell + add that cell to inputColumn
        nameColumn[index].parentNode.replaceChild(nameCell, nameColumn[index]);
        inputColumn.push(nameCell);

    }


}





function save(e) {
    table.className = "";
    var index;
    length = nameColumn.length;
    deleteHeader.style.visibility = "hidden";

    //reset nameColumn
    nameColumn = [];
    // stateColumn = [];

    //iterate through each input cell to transform back to normal cell
    for (index = 0; index < length; index++) {
        deleteColumn[index].style.visibility = "hidden";

        //Transform back to name cell
        var savedName = document.createElement("td");
        savedName.innerText = inputColumn[index].childNodes[0].value;

        inputColumn[index].parentNode.replaceChild(savedName, inputColumn[index]);

        //update nameColumn with new saved task names
        nameColumn.push(savedName);


        


        //IDK FOR SOME REASON THE FIRST TASK HAS A TEXT ELEMENT AS ITS FIRST CHILD INSTEAD OF A SPAN ELEMENT
        if(index==0){
            stateColumn[index].childNodes[1].innerText = selectColumn[index].options[selectColumn[index].selectedIndex].value;
            dateColumn[index].childNodes[1].innerText = dateSelectColumn[index].value;
        }else{
            stateColumn[index].childNodes[0].innerText = selectColumn[index].options[selectColumn[index].selectedIndex].value;
            dateColumn[index].childNodes[0].innerText = dateSelectColumn[index].value;

        }
    }


    //reset input columns
    inputColumn = [];
    


}

function sort(e) {
    console.log("sorting");
}