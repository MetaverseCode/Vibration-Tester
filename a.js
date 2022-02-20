document.getElementById("btn1").style.display = "none";
function a(){
    var a = document.getElementById("text").value;
    var second = a*100;
    navigator.vibrate(second);
    document.getElementById("btn1").style.display = "block";
    document.getElementById("btn").style.display = "none";
}
function b(){
    navigator.vibrate(0);
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn").style.display = "block";
}
