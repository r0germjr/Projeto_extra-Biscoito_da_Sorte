const luckTicketClosed = document.querySelector('#luck-ticket-closed');
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnAnotherTicket = document.querySelector('#btnAnotherTicket')

luckTicketClosed.addEventListener('click', openTicket)
btnAnotherTicket.addEventListener('click', anotherTicket)

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function openTicket() {
  toggleScreen()
}

function anotherTicket() {
  toggleScreen()
}