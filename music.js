var a = "close";
function menu() {
if (a == "open")
{
    a = "close";
document.getElementById('menubar').style = "visibility: hidden";
}
else if (a == "close")
{
    a = "open";
    document.getElementById('menubar').style = "visibility: visible";
}
}