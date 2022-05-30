var list = document.getElementById("list");

function addTodo(){
    if (todo_item.value == "") {
        alert("Please enter something")
    }
    else {
        var todoItem = document.getElementById("todo_item");
        var li = document.createElement("li");
        var liText = document.createTextNode(todo_item.value);
        li.appendChild(liText);
        list.appendChild(li);
        todo_item.value = "";
    
        var hr = document.createElement("hr")
        li.appendChild(hr)
        
        var delBtn = document.createElement("button");
        var delText = document.createTextNode("DELETE");
        delBtn.appendChild(delText);
        li.appendChild(delBtn)
        delBtn.setAttribute("onclick","deleteItem(this)")
    
        var editBtn = document.createElement("button");
        var editText = document.createTextNode("EDIT");
        editBtn.appendChild(editText);
        li.appendChild(editBtn);
        editBtn.setAttribute("onclick","editItem(this)")
    }
}

function deleteItem(e){
    e.parentNode.remove()
}

function deleteAll(){
    list.innerHTML = ""
}

function editItem(e){
   var val = e.parentNode.firstChild.nodeValue;
   var editVal = prompt("enter new",val);
   e.parentNode.firstChild.nodeValue = editVal
}