document.getElementById("tab2").style.display = "none";    
document.getElementById("tab3").style.display = "none";
document.getElementById("a1").style.color = "#3F8FB0";
function openTab1(){
    document.getElementById("tab2").style.display = "none";
    document.getElementById("tab3").style.display = "none";
    document.getElementById("tab1").style.display = "inline";
    document.getElementById("a1").style.color = "#3F8FB0";
    document.getElementById("a2").style.color = "black";
    document.getElementById("a3").style.color = "black";
}
function openTab2(){
    document.getElementById("tab1").style.display = "none";
    document.getElementById("tab3").style.display = "none";
    document.getElementById("tab2").style.display = "inline";
    document.getElementById("a2").style.color = "#3F8FB0";
    document.getElementById("a1").style.color = "black";
    document.getElementById("a3").style.color = "black";
}
function openTab3(){
    document.getElementById("tab2").style.display = "none";
    document.getElementById("tab1").style.display = "none";
    document.getElementById("tab3").style.display = "inline";
    document.getElementById("a3").style.color = "#3F8FB0";
    document.getElementById("a2").style.color = "black";
    document.getElementById("a1").style.color = "black";
}