function validateForm() {
    // Username Validation (Alphanumeric characters only, min length 3)
    var username = document.getElementById("username").value;
    var usernameRegex = /^[a-zA-Z0-9]{3,}$/;
    if (!usernameRegex.test(username)) {
        alert("Username must be at least 3 characters long and contain only letters and numbers.");
        return false;
    }

    // Password Validation (At least 8 characters, including a number and a special character)
    var password = document.getElementById("password").value;
    var passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/|\\`~\-]).{8,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long and include a number and a special character.");
        return false;
    }

    // Mobile Validation (10 digits, format: 123-456-7890)
    var mobile = document.getElementById("mobile").value;
    var mobileRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!mobileRegex.test(mobile)) {
        alert("Mobile number must be in the format: 123-456-7890.");
        return false;
    }

    // City Validation (Only alphabetic characters, spaces, and at least 3 characters)
    var city = document.getElementById("city").value;
    var cityRegex = /^[a-zA-Z\s]{3,}$/;
    if (!cityRegex.test(city)) {
        alert("City must be at least 3 characters long and contain only letters and spaces.");
        return false;
    }

    // Email Validation (Basic email format)
    var email = document.getElementById("email").value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // If all validations pass
    alert("Form submitted successfully!");
    return true;
}