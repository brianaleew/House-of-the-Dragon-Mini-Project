console.log('Linked')

// Defining Elements Needed
const bioBtn = document.querySelectorAll('bio-button')
const statusBtn = document.querySelectorAll('status-button')
const bioText = document.getElementById('bio-text')
const statusText = document.getElementById('status-text')

// let bioBtnArray = [bioBtn]
// console.log(bioBtnArray)


// Clicker Functions for Bio and Status Buttons
let bioClick = () => {
    console.log('bio has been clicked')
}

let statusClick = () => {

}

//Adding Event Listeners
bioBtn.forEach((item) => {
    item.addEventListener('click', bioClick)
});



