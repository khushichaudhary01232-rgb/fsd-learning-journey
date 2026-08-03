function validateForm() {
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    // Email validation: must follow name@domain.com format
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Enter a valid email in the format name@domain.com");
        return false;
    }

    // Phone number validation: 10 digits only
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must contain exactly 10 digits.");
        return false;
    }

    return true;
}
