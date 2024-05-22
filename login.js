// Add event listener to the login form
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the username and password from the form fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send a POST request to the server to authenticate the user
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password }) // Send username and password as JSON in the request body
    })
    .then(response => {
        // Check if the response is successful (status code 200-299)
        if (response.ok) {
            // If login is successful, redirect the user to the pet registration form
            window.location.href = '/Adopt_GiveAway_Form.html';
        } else {
            // If login fails, display an error message to the user
            showMessage('Login failed. Please check your credentials.');
        }
    })
    .catch(error => {
        // If an error occurs during the fetch request, log the error and display a generic error message to the user
        console.error('Error:', error);
        showMessage('An error occurred. Please try again later.');
    });
});

// Function to display a message on the webpage
function showMessage(message) {
    document.getElementById('message').textContent = message; // Set the text content of the message element to the provided message
}
