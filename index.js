/*
function saveLead() {
    console.log("Button clicked!")
}
*/
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

//let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function(){
    //myLeads.push("www.awesomelead.com")

    myLeads.push(inputEl.value)

    console.log(myLeads)
})