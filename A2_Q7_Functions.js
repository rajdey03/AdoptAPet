// Waiting for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Update the date and time display
    updateDateTime();
    // Update the date and time every second
    setInterval(updateDateTime, 1000);

    // Get the submit buttons for the find pet and giveaway pet forms
    const submit_find_check = document.getElementById("submit_find_check");
    const submit_give_check = document.getElementById("submit_give_check");

    // Add event listeners to the find pet form submit button
    if (submit_find_check){
        submit_find_check.addEventListener("click", checkFindPetForm);
    }

    // Add event listeners to the give pet form submit button
    if (submit_give_check){
        submit_give_check.addEventListener("click",checkGivePetForm);
    }
});

// Function to get the current date and time (Question 7, part 1)
function getCurrentDateAndTime(){
    // Array of month names
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    // Get the current date and time
    let today = new Date();
    // Extract components of the date and time
    let day = today.getDate();
    let month = months[today.getMonth()];
    let year = today.getFullYear();
    let hour = today.getHours();
    let minute = today.getMinutes();
    // Add leading zero to minute if necessary
    if (minute < 10){
        minute = "0"+ minute;
    }
    let second = today.getSeconds();
    // Add leading zero to second if necessary
    if (second < 10){
        second = "0"+ second;
    }
    // Return formatted date and time string
    return month + " " + day + ", " + year + ", " + hour + ":" + minute + ":" + second;
}

// Function to update the date and time display
function updateDateTime(){
    // Get the element for displaying date and time
    document.getElementById("time").innerText = getCurrentDateAndTime();
}

// Slide show functionality (Question 7, part 2)

// Initialize current slide index
let currentSlide = 0;
// Get all slide elements
let slides = document.getElementsByClassName("Browse");
// Display the initial slide
displaySlide(currentSlide);

// Function to move to the next slide
function nextPage() {
    // Calculate the index of the next slide
    currentSlide = (currentSlide + 1) % slides.length;
    // Display the next slide
    displaySlide(currentSlide);
}

// Function to move to the previous slide
function previousPage() {
    // Calculate the index of the previous slide
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    // Display the previous slide
    displaySlide(currentSlide);
}

// Function to display a slide based on its index
function displaySlide(index) {
    // Loop through all slides
    for (let i = 0; i < slides.length; i++) {
        // Hide all slides
        slides[i].classList.remove("active");
    }
    // Display the selected slide
    slides[index].classList.add("active");
}

// Function to validate the find pet form (Question 7, part 3)
function checkFindPetForm(event) {
    // Get the find pet form and its elements
    const form = document.forms["find_pet"];
    const breed = form.elements["breed"];

    // Check if the breed field is empty
    if (!breed.value.trim()) {
        const any_breed = form.elements["any_breed"];
        
        // Check if the "any_breed" checkbox is checked
        if (!any_breed.checked) {
            event.preventDefault();
            alert("Please fill out all required fields.");
        } else {
            return true;
        }
    }
}

// Function to validate the giveaway pet form (Question 7, part 4)
function checkGivePetForm(event) {
    // Get the give pet form and its elements
    const form = document.forms["give_pet"];
    const breed = form.elements["breed"];
    const comments = form.elements["comments"];
    const first_name = form.elements["firstname"];
    const family_name = form.elements["familyname"];
    const email = form.elements["email"];
    // Initialize alert message
    let alert_message  = "Please fill out all required fields:\n";

    // Check if breed field is empty
    if (/^\s*$/.test(breed.value.trim())) {
        event.preventDefault();
        alert_message += "What breed is your dog/cat?\n";
    }

    // Check if comments field is empty
    if (/^\s*$/.test(comments.value.trim())) {
        event.preventDefault();
        alert_message += "Comments on your pet\n";
    }

    // Check if first name field is empty
    if (/^\s*$/.test(first_name.value.trim())) {
        event.preventDefault();
        alert_message += "Owner's First Name\n";
    }

    // Check if family name field is empty
    if (/^\s*$/.test(family_name.value.trim())) {
        event.preventDefault();
        alert_message += "Owner's Family Name\n";
    }

    // Check if email field is empty
    if (/^\s*$/.test(email.value.trim())) {
        event.preventDefault();
        alert_message += "Owner's Email\n";
    } 

    // Check if email field is in a valid format
    else {
        const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!email_pattern.test(email.value.trim())) {
            event.preventDefault();
            alert_message += "Invalid email format\n";
        }
    }

    // Display alert message if any fields are empty
    if (alert_message !== "Please fill out all required fields:\n") {
        alert(alert_message);
        return;
    }
}
