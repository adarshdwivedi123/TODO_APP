const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
function addTask(){
    if(inputBox.value === '')
    {
        alert('You must write something');
    }
    else{
        let li=document.createElement("li");
        li.innerText=inputBox.value;
        // this value display in list container that  why we putting in the list
        listContainer.appendChild(li);


        //////////////////////////////
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    //here we have to clear input filed after adding
    inputBox.value=" ";
    saveData();

}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData()
    }    
},false);

function saveData(){
    // whaterver data present in list-container that will store in browswer with name data
    localStorage.setItem("data",listContainer.innerHTML);

}
// display the data whenwvwr we open data
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();
