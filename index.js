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

//localStorage.clear()
let leads = JSON.parse(localStorage.getItem("myLeads"));




console.log(leads)

inputBtn.addEventListener("click", function() {

    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    renderLeads()

    console.log(localStorage.getItem("myLeads"))
})

// Let's try a different method!
function renderLeads() {
let listItems = ""
for (let i = 0; i < myLeads.length; i++) {

    //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    listItems += `
    <li>
    <a target='_blank' href='${myLeads[i]}'>
    ${myLeads[i]}
    </a>
    </li>
    `
    /*
    const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.append(li)
    */
   
}

ulEl.innerHTML = listItems
}