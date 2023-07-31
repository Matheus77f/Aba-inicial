const containerEl = document.getElementById('container')
const leftEl = document.getElementById('container')
const rightEl = document.getElementById('container')

const userEmailEl = document.getElementById('container')
const invalidEmailEl = document.getElementById('container')
const emailinput = document.getElementById('container')
const submitBtnEl = document.getElementById('container')

const confirmedMesssageEl = document.getElementById('container')
const dismissMessageEl = document.getElementById('container')


function formSuccess() {
    confirmedMesssageEl.classList.add('active')
    containerEl.classList.add('sucess')
    leftEl.style.display = 'none'
    rightEl.style.display ='none'
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

submitBtnEl.addEventListener('click',(e) => {
    e.preventDefault()
    const email = emailinput.ariaValvueMax.trim()

    if(validateEmail(email)){
        formSuccess()
        userEmailEl.innerText =email 
        emailinput.value = ''

        invalidEmailEl.classList.remove('active')
        emailinput.classList.remove('active')
    }else{
        invalidEmailEl.classList.add('active')
        emailinput.classList.add('active')
    }

})


dismissMessageEl.addEventListener('click',() =>{
    leftEl.style.display = 'block'
    rightEl.style.display = 'block'
    containerEl.classList.remove ('success')
    confirmedMesssageEl.classList.remove('active')
})