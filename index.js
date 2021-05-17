/*
function saveLead() {
    console.log("Button clicked!")
}
*/
/*
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

//let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function(){
    //myLeads.push("www.awesomelead.com")

    myLeads.push(inputEl.value)

    console.log(myLeads)
})
*/

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""

    renderLeads()
})

// Let's try a different method!
function renderLeads() {
let listItems = ""
for (let i = 0; i < myLeads.length; i++) {

    listItems += "<li>" + myLeads[i] + "</li>"
    /*
    const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.append(li)
    */
   console.log(listItems)
}

ulEl.innerHTML = listItems
}