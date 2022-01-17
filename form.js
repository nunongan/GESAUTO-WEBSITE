function myFunction() {
    document.getElementById("text1").disabled = true;
    document.getElementById("text2").disabled = true;
    document.getElementById("text3").disabled = true;
    document.getElementById("text4").disabled = true;
    document.getElementById("text5").disabled = true;
    document.getElementsByName('submit').style.visibility = "visible";
    document.getElementsByName('confirm').style.visibility = "visible";
    document.getElementsByName('cancel').style.visibility = "hidden";
}
function myFunctionC() {
    $("#cancel").click(function () {
        document.getElementById("text1").disabled = false;
        document.getElementById("text2").disabled = false;
        document.getElementById("text3").disabled = false;
        document.getElementById("text4").disabled = false;
        document.getElementById("text5").disabled = false;
        document.getElementsByName('submit').style.visibility = "hidden";
        document.getElementsByName('confirm').style.visibility = "hidden";
        document.getElementsByName('cancel').style.visibility = "visible";
    });
}
function myFunctionCO() {
    $("#confirm").click(function () {
        location.reload();
    });
}
