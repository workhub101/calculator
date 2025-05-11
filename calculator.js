
function append(value){
    document.getElementById("display").value += value
}
function calculate(){
    try{
        document.getElementById("display").value = eval(document.getElementById("display").value)
    }
    catch{
        document.getElementById("display")
        alert("error")
        clearDisplay()
    }
}
function clearDisplay(){
    document.getElementById("display").value = " "
    
}
function deleteLastValue(){
    document.getElementById("display").value = document.getElementById("display").value.slice(0,-1)
}