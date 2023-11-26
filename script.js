// Function to validate the form fields
function validateForm() {
    if (document.getElementById('email').value === '') {
        alert('Email is required');
        return false;
    }

    if (document.getElementById('password').value === '') {
        alert('Password is required');
        return false;
    }

    if (document.getElementById('firstName').value === '') {
        alert('First Name is required');
        return false;
    }

    if (document.getElementById('lastName').value === '') {
        alert('Last Name is required');
        return false;
    }

    return true;
}

// Function to sanitize user input to prevent XSS attacks
function sanitizeInput(input) {
    return input.replace(/<script.*?>.*?<\/script>/gi, 'sanitized');
}

// Add event listener to the form for the submit event
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Perform form validation
    if (!validateForm()) {
        return; // Stop the form submission if validation fails
    }

    // Sanitize the comments input field to prevent XSS
    let comments = document.getElementById('comments').value;
    let sanitizedComments = sanitizeInput(comments);
    console.log('Sanitized comments:', sanitizedComments);

    // Display submission message
    let submissionMessage = document.getElementById('submission-message');
    submissionMessage.textContent = 'Data Submitted!';
    submissionMessage.style.display = 'block'; // Show the message

});

