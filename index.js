'use strict';

/* 
clean code: use .map function + create function to append array of elements
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

var selectColumn = [];
var stateColumn = [];

var deleteColumn = [];

var dateColumn = [];

//Variables to help find the index of selected task state for the select elements
var selectingIndex;
var indexOfSelect;

//Add task to table
function addTask(e) {
    e.preventDefault();

    //add existing task to corresponding columns
    // nameColumn.push(document.getElementById("helloTaskName"));
    // deleteColumn.push(document.getElementById("helloTaskDelete"));
    // dateColumn.push(document.getElementById("helloTaskDate"));
    //Create task
    var taskName = document.createElement("td");
    taskName.innerText = inputTask.value;
    nameColumn.push(taskName);

    var taskDate = document.createElement("td");
    taskDate.innerText = inputDate.value;
    dateColumn.push(taskDate);


    //Create checkbox
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    var taskDelete = document.createElement("td");
    taskDelete.appendChild(checkBox);
    deleteColumn.push(taskDelete);
    taskDelete.style.visibility = "hidden";

    var taskState = document.createElement("td");
    taskState.innerText = "Not Started";
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

//Find the index of the select
function indexFinder() {
    selectingIndex = this.selectedIndex;
    console.log(this.selectedIndex);
    indexOfSelect = this.id;
    console.log(this.id);

    return this.selectedIndex;
}

function edit(e) {

    //Set delete column to visible (iterate throw each delete cell)
    var deleteHeader = document.getElementById("delete");
    deleteHeader.style.visibility = "visible";

    var index;
    for (index = 0; index < deleteColumn.length; index++) {
        deleteColumn[index].style.visibility = "visible";
    }
    var counter = 0;
    //iterate through each name cell to transform into input cell
    for (index = 0; index < nameColumn.length; index++) {
        // Create new input element


        var inputName = document.createElement("input");
        inputName.type = "text";
        inputName.defaultValue = nameColumn[index].innerText;
        inputName.style.margin = "4px";

        //replace current name cell with input cell + add that cell to inputColumn
        nameColumn[index].parentNode.replaceChild(inputName, nameColumn[index]);
        inputColumn.push(inputName);



        var select = document.createElement("select");
        select.id = counter++;
        var NotStartedOption = document.createElement("option");
        NotStartedOption.innerText = "Not Started";
        var InProgressOption = document.createElement("option");
        InProgressOption.innerText = "In Progress";
        var CompletedOption = document.createElement("option");
        CompletedOption.innerText = "Completed";
        select.appendChild(NotStartedOption);
        select.appendChild(InProgressOption);
        select.appendChild(CompletedOption);
        select.addEventListener("change", indexFinder);
       
        if (indexOfSelect == index) {
           // console.log("EQUAL");
            select.selectedIndex = selectingIndex;
        }

        selectColumn.push(select);
        stateColumn[index].parentNode.replaceChild(select, stateColumn[index]);

    }



}





function save(e) {
    var index;
    length = nameColumn.length;

    //reset nameColumn
    nameColumn = [];
    stateColumn = [];
    //iterate through each input cell to transform back to normal cell
    for (index = 0; index < length; index++) {

        //Transform back to name cell
        var savedName = document.createElement("td");
        savedName.innerText = inputColumn[index].value;

        inputColumn[index].parentNode.replaceChild(savedName, inputColumn[index]);

        //update nameColumn with new saved task names
        nameColumn.push(savedName);




        //Transform back to normal state cell
        var savedState = document.createElement("td");
        savedState.innerText = selectColumn[index].options[selectColumn[index].selectedIndex].value;

        selectColumn[index].parentNode.replaceChild(savedState, selectColumn[index]);
        stateColumn.push(savedState);






    }

    //reset input columns
    inputColumn = [];
    selectColumn = [];


}

function sort(e) {
    console.log("sorting");
}