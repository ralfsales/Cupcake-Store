// Common function for handling form submission
function handleContactForm() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();

        // Saving the user input in a constant to be used on coding
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const comments = document.getElementById("comments").value;

        // Create a rule to some of users input
        const nameRegex = /^[a-zA-Z\s]+$/;
        const phoneRegex = /^\d{9,10}$/; // Only numbers, 9 or 10 digits

        // Verify if the user's input is a valid name (letters only)
        if (!nameRegex.test(name)) {
            alert("Please enter a valid name (letters only).");
            return;
        }

        // Verify if the user's input is a valid phone number (numbers only and length of 9 or 10 digits)
        if (!phoneRegex.test(phone)) {
            alert("Please enter a valid phone number (9 or 10 digits).");
            return;
        }

        // Verify if the user input is given to comments field
        if (comments.trim() === "") {
            alert("Please enter your comments.");
            return;
        }

        // Here it prompts to the user a message of confirming their request.
        alert("Thank you for contacting us, your request is sent to our team to process!");
    });
}