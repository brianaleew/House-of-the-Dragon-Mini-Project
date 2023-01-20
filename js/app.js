console.log('Linked')

// Defining Elements Needed
const bioBtn = document.querySelectorAll('.bio-button')
const statusBtn = document.querySelectorAll('status-button')
const bioText = document.getElementById('bio-text')
const statusText = document.getElementById('status-text')
const cardText = document.querySelectorAll('.pop-up-text-p')

 cardText.style.color = 'red'


// Clicker Functions for Bio and Status Buttons
let bioClick = () => {
    console.log('bio has been clicked')
    
    cardText.innerText = 'Hello'
    
}

let statusClick = () => {

}

//Adding Event Listeners
bioBtn.forEach((item) => {
    item.addEventListener('click', bioClick)
});



