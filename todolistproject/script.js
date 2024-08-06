const inputbox = document.getElementById("inputbox");
const addbtn = document.getElementById("addbtn");
const todolist = document.getElementById("todolist");

var edittodo = null;
const addtodo =()=>{
    const inputtext = inputbox.value.trim();
    if(inputtext.length <= 0)
    {
        alert("your must enter the text");
        return false;
    }
    if(addbtn.value === "Edit"){
        edittodo.target.previousElementSibling.innerHTML = inputtext;
        addbtn.value = "Add";
        inputbox.value = "";
    }
    else{
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputtext;
    li.appendChild(p);


    const editbtn = document.createElement("button");
    editbtn.innerHTML= "Edit";
    editbtn.classList.add("btn","editbtn");
    li.appendChild(editbtn);

    const deletebtn = document.createElement("button");
    deletebtn.innerHTML= "Remove";
    deletebtn.classList.add("btn","delbtn");
    li.appendChild(deletebtn);

    todolist.appendChild(li);
    inputbox.value="";
    }
    

}

const updatetodo = (e)=>{
    // console.log(e.target.innerHTML);
    if(e.target.innerHTML === "Remove"){
        todolist.removeChild(e.target.parentElement);
    }
    if(e.target.innerHTML === "Edit"){
        inputbox.value = e.target.previousElementSibling.innerHTML;
        inputbox.focus();
        addbtn.value = "Edit";
        edittodo = e;
    }
}

addbtn.addEventListener('click',addtodo);
todolist.addEventListener('click',updatetodo);
