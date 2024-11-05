//Function defined for the PopUP
function popup(index){
    let elem = document.getElementsByClassName('VS')
    elem[index].style.display= 'flex';
}

//Event-Listener defined for the pop-up to disappear when clicked on the screen
window.addEventListener('click', function(event){
    let elem = document.getElementsByClassName('VS');
    for (let i = 0; i < elem.length; i++) {
        if (elem[i].contains(event.target)) {
            elem[i].style.display = 'none';
        }
    }
})
