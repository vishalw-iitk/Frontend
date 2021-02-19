const name_element = document.querySelector('#name_id')
const pass = document.querySelector("#pass_id")
const loc = document.querySelector("#loc_id")
const err = document.querySelector("#error")
const form = document.querySelector("#form_id")

form.addEventListener('submit',(e)=>{
    let messages = []
    if(name_element.value==='' || name_element.value===null){
        messages.push("Name is required")
    }
    else if(pass.value.length < 6 || pass.value.length > 10){
        messages.push("Password must be longer than or equal to 6 and less than equal to 10")
    }
    else if(loc.value==='' || loc.value===null){
        messages.push("Location is required")
    }

    if(messages.length > 0){
        err.innerText = messages.join(', ')
        err.style.backgroundColor = "red";
        e.preventDefault()
    }
    
})

