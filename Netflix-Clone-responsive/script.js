let bar = document.getElementById('bar');

//val variable defined to check whether the menu is diminished or not.
let val = 0;


//Menu function for the reponsive navbar. When clicked, diminished menu will be opened to select options
const menu = () => {
    if(val==0){
        let menuContent = document.getElementById('menuContent');
        menuContent.style.display= 'block';
        val=1;
    }
    else{
        let menuContent = document.getElementById('menuContent');
        menuContent.style.display= 'none';
        val=0;
    }
}