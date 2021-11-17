let outputscreen=document.getElementById("output-screen");
function display(num){
    outputscreen.value += num;
}
function calculate(){
    try{
        outputscreen.value=eval(outputscreen.value);
    }
    catch(e){
        outputscreen.value="invalid";
    }
}
function cl()
{
    outputscreen.value="";
}
function deletefn(){
    outputscreen.value=outputscreen.value.slice(0,-1);
}