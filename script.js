const pw = document.querySelector('#pw')
const confirmPW = document.querySelector('#confirm-pw')
const submit = document.querySelector('.create-account-btn')
const pwError = document.querySelector('.pw-error')

const validatePW = (e) => {
    e.preventDefault()
    if (confirmPW.value !== pw.value) {
        pw.classList.add('error')
        confirmPW.classList.add('error')
        pwError.style.display = 'block'
    } else {
        pw.classList.remove('error')
        confirmPW.classList.remove('error')
        pwError.style.display = 'none'
    }
}

submit.addEventListener('click', validatePW)

