var count = 3;
var countElement = document.querySelector("#count")

console.log (countElement)

function addlike(){
    count++; 
    countElement.innerText = count + " likes"
    console.log(count)
}