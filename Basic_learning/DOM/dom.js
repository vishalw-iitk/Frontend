const body = document.body
body.append("appended into the body")

// const break_ele = document.createElement("br")

// body.appendChild(break_ele)
// body.append("again appended into the body", "second string concatinated")

// body.append(break_ele)


const divtext = document.createElement("div")
divtext.innerText = "This innerText is inside the div element"
// body.append(divtext)  This also works
body.appendChild(divtext)

//See it over the console (Hello Bye content)
const div_1 = document.querySelector("div")
console.log(div_1.innerText)
console.log(div_1.textContent)

//innerHTML to add the content by utilizing other tags as well
const divhtml = document.createElement("div")
divhtml.innerHTML = "<strong>This innerHTML is inside the div element</strong>"
body.append(divhtml)

//The above innerHTML task can be done in the following way as well
const strong_ele = document.createElement("strong")
strong_ele.innerText = "This is created using strong element"
body.append(strong_ele)

const div_3 = document.createElement("div")
const spanHi = document.querySelector('#s1')  //id => #  || for classes we write '.class-name'
const spanBye = document.querySelector('#s2')
spanBye.remove()
// div_3.append(spanBye) This will add spanBye element back again

// We can also use document.getElementbyId("id-name") // Without #
// To get every class element, we write : Array.from(document.getElementByClassName("class-name"))
// we can do the same using document.querySelectorALL(".class-name")
// Pass the individual same-classes from the class array into the function  =>   class-name.forEach(function_name)


console.log(spanHi.getAttribute("id"))
console.log(spanHi.getAttribute("title"))

spanHi.setAttribute("title", 's11_title')
console.log(spanHi.getAttribute("title"))

spanHi.removeAttribute("title")

console.log(spanHi.dataset)  //To get the custom attributes | we did data-test="This is a test". But on console, we get json object having test:"This is a test". So 'data-' is remove in the backend object and also few others are converted such as data-longer-name will become longerName

console.log(spanHi.dataset.test) //Printing the test property

spanHi.dataset.newName = "hi" //Adding a new custom attribute
console.log(spanHi.dataset)

spanHi.classList.add("spanhi_class") //To add the class element
spanHi.classList.remove("ozo-class") //To remove a class element

spanHi.classList.toggle("toggle-check") //Adds the class if absent || Removes the class if present

//Now the direct CSS properties
spanHi.style.color = "red" //We can set any CSS property

