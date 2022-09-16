//Setting up Varibols
let Theinput =document.querySelector(".add-task input");
let TheAddbutton =document.querySelector(".add-task .plus");
let TaskesContainer =document.querySelector(".tasks-content");
let theCount =document.querySelector(".tasks-count");
let theCompleatedt =document.querySelector(".tasks-compleatedt");



//Focus on input
window.onload=function(){
    Theinput.focus()
}


//Adding The Task

TheAddbutton.onclick = function(){

// if input empty

if(Theinput.value === ''){

    swal("Please enter the tasks", {
        buttons: false,
      });

}else{
    let noTaskMsg =document.querySelector(".no-tasks-masseg");
    if (document.body.contains(document.querySelector(".no-tasks-masseg"))) {
        //Remove Notask Masseg
            noTaskMsg.remove()
    }

//Creat Span Element

let mainSpan =document.createElement("span");

//Creat Delete Button 
let deleteElement =document.createElement("span");

//Creat The Span Text
let Text =document.createTextNode(Theinput.value);

//creat The Delete Button Text
let deleteText = document.createTextNode("Delete");

//Add Text span 
mainSpan.appendChild(Text);

//Add class To span
mainSpan.className ='task-box';

//Add Text To Delete button
deleteElement.appendChild(deleteText);

//add class To span 
deleteElement.className ='delete';

//Add Delete Button To span
mainSpan.appendChild(deleteElement);

//Add mainSpan To container
TaskesContainer.appendChild(mainSpan);

//Empty the input
Theinput.value='';

// Focus on Filed
Theinput.focus();

//Calculate Text
CalculateText()
};
};
 
document.addEventListener('click',(e)=>{

    if(e.target.className == 'delete'){

        //Delete Task
        e.target.parentNode.remove();
        //check Number of Task
        if(TaskesContainer.childElementCount == 0){

            createNoTasks()
        }
        //Add sweet aleart
        swal("Are you sure?", {
            dangerMode: true,
            buttons: true,
          });
    }
    //Calculate Text
CalculateText()
});
function createNoTasks(){

// Function To Create No Message
let msgSpan =document.createElement("span");
//create The Text Message
let msgText =document.createTextNode("No Tasks To Show")
//Add Text To Span Element
msgSpan.appendChild(msgText);

// Add class msgspan
msgSpan.className="no-tasks-masseg";
//Add Span To Taskes Container  
TaskesContainer.appendChild(msgSpan);

};
// create Function Calculate Text

function CalculateText(){
    // Calculate All Text
    theCount.innerHTML =document.querySelectorAll(".tasks-content .task-box span").length;
}

