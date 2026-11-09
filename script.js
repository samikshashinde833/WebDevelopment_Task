function showMessage(){
    alert("Welcome to my first webpage!");
}

function changeColor(){
document.body.style.backgroundColor="lightblue";
}
function showDate(){
document.getElementById("date").innerHTML=new Date().toDateString();
}