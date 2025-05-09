const button = idSelector('button');
const toasts = idSelector('toasts');
const messages = [
    'Message one',
    'Message two',
    'Message three',
    'Message four',
]

const types = [
    'info',
    'success',
    'error',
]

button.addEventListener('click',()=> createNot())


function createNot (message = null , type = null) {
    const notif= document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())
    notif.innerText = message? message:  getRandomMessage()
    toasts.appendChild(notif)

    setTimeout(()=>{
        notif.remove()
    },1000)
}

function getRandomMessage(){
    return messages[Math.floor(Math.random()*messages.length)]
}

function getRandomType(){
    return types[Math.floor(Math.random()*types.length)]
}

function idSelector(selector) {
    return document.getElementById(selector);
}