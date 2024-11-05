let toDoList = document.getElementById('todolist')
let input = document.getElementById('input')
let toDoListArray = []

function showList(){
    toDoList.innerHTML = ""
    toDoListArray.forEach((n,i) =>{
        toDoList.innerHTML += `
        <li>${n} 
            <a onclick="editItem(${i})">EditToDo</a>
            <a onclick="deleteItem(${i})">DeleteToDo&times</a>
        </li>
        `
    })
}
function deleteItem(i){
    toDoListArray.splice(i,1)
    showList()
}
function editItem(i){
    let val = prompt("Please enter a new value")
    toDoListArray.splice(i,1,val)
    showList()
}
document.getElementById('button').onclick = () =>{
    toDoListArray.push(input.value)
    console.log(toDoListArray)
    input.value = ''
    showList()
}

