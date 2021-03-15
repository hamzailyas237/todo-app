var list = document.getElementById("list");

firebase.database().ref('todos').on('child_added',function(data){
    console.log(data.val())

    // Creating li Tag

    var li = document.createElement("li");
    var liText = document.createTextNode(data.val().value);
    li.appendChild(liText);
    list.appendChild(li);

    // Creating hr Tag

    var hr = document.createElement("hr")
    li.appendChild(hr)
      
    // Creating delete button

    var delBtn = document.createElement("button");
    var delText = document.createTextNode("DELETE");
    delBtn.appendChild(delText);
    li.appendChild(delBtn)
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.setAttribute("id",data.val().key)

    // Creating edit button

    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editBtn.appendChild(editText);
    li.appendChild(editBtn);
    editBtn.setAttribute("onclick","editItem(this)")
    editBtn.setAttribute("id",data.val().key)

})

function addTodo(){
    var todoItem = document.getElementById("todo_item")

    var key = firebase.database().ref('todos').push().key

    var todo = {
        value: todo_item.value,
        key: key
    }   
    firebase.database().ref('todos').child(key).set(todo)
    todo_item.value = "";

}

function deleteItem(e){
    firebase.database().ref('todos').child(e.id).remove()
    // console.log(e.id)
    e.parentNode.remove()
}

function deleteAll(){
    firebase.database().ref('todos').remove()
    list.innerHTML = ""
}

function editItem(e){
   var val = e.parentNode.firstChild.nodeValue;
   var editVal = prompt("enter new todo",val);
   e.parentNode.firstChild.nodeValue = editVal

   var editedTodo = {
       value: editVal,
       key: e.id
   }
   console.log(editedTodo)

   firebase.database().ref('todos').child(e.id).set(editedTodo)

}