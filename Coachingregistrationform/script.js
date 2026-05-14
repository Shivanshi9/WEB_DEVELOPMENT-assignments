let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    removeErrors(); //removing old errors

    let fullName = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let dob = document.getElementById("dob").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let qualification = document.getElementById("qualification").value;
    let percentage = document.getElementById("percentage").value.trim();
    let course = document.getElementById("course").value;
    let address = document.getElementById("address").value.trim();
    let city = document.getElementById("city").value.trim();
    let pincode = document.getElementById("pincode").value.trim();
    let guardianName = document.getElementById("guardianname").value.trim();
    let guardianContact = document.getElementById("guardiancontact").value.trim();
    let reference = document.getElementById("reference").value;

    let batchTiming = [];
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
        if (checkbox.checked) {
            batchTiming.push(checkbox.value);
        }
    });

    let nameRegex = /^[A-Za-z ]+$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let mobileRegex = /^[6-9]\d{9}$/;
    let pincodeRegex = /^\d{6}$/;
    let percentageRegex = /^(100|[0-9]{1,2})$/;
    let gradeRegex = /^[A-Fa-f]$/;

    let isValid = true;

    // Full Name
    if (!nameRegex.test(fullName)) {
        showError("fullname", "Please enter a valid name");
        isValid = false;
    }

    // Email
    if (!emailRegex.test(email)) {
        showError("email", "Please enter a valid email address");
        isValid = false;
    }

    // Mobile
    if (!mobileRegex.test(mobile)) {
        showError("mobile", "Enter a valid 10-digit Indian mobile number");
        isValid = false;
    }

    // DOB
    if (!validateAge(dob)) {
        showError("dob", "You must be at least 15 years old");
        isValid = false;
    }

    // Gender
    if (!gender) {
        showRadioError("other", "Please select gender");
        isValid = false;
    }

    // Qualification
    if (qualification === "Select") {
        showError("qualification", "Please select a qualification");
        isValid = false;
    }

    // Percentage / Grade
    if (
        !percentageRegex.test(percentage) &&
        !gradeRegex.test(percentage)
    ) {
        showError(
            "percentage",
            "Enter valid percentage (0-100) or grade (A-F)"
        );
        isValid = false;
    }

    // Course
    if (course === "Select") {
        showError("course", "Please select a course");
        isValid = false;
    }

    // Batch Timing
    if (batchTiming.length === 0) {
        showRadioError("weekend", "Select at least one batch timing");
        isValid = false;
    }

    // Address
    if (address.length < 10) {
        showError("address", "Enter your full address");
        isValid = false;
    }

    // City
    if (!nameRegex.test(city)) {
        showError("city", "Please enter a valid city name");
        isValid = false;
    }

    // Pincode
    if (!pincodeRegex.test(pincode)) {
        showError("pincode", "Enter a valid 6-digit pin code");
        isValid = false;
    }

    // Guardian Name
    if (!nameRegex.test(guardianName)) {
        showError("guardianname", "Enter guardian's full name");
        isValid = false;
    }

    // Guardian Contact
    if (!mobileRegex.test(guardianContact)) {
        showError(
            "guardiancontact",
            "Enter valid guardian contact number"
        );
        isValid = false;
    }

    // Reference
    if (reference === "Select") {
        showError("reference", "Please select an option");
        isValid = false;
    }

    //data object
    if (isValid) {
        const studentData = {
            "fullName": fullName, 
            "email": email, 
            "mobile": mobile, 
            "dob": dob, 
            "gender": gender ? gender.value : "Not Selected", 
            "qualification": qualification, 
            "percentage": percentage, 
            "course": course, 
            "batchTiming": batchTiming, 
            "address": address, 
            "city": city, 
            "pincode": pincode, 
            "guardianName": guardianName, 
            "guardianContact": guardianContact, 
            "reference": reference
        };

        console.log(studentData);

        alert("Form submitted successfully!");

        form.reset();
    }
});


function validateAge(dob) {
    let birthDate = new Date(dob);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }
    return age >= 15;
}

//error to show
function showError(id, message) {
    let element = document.getElementById(id);
    let error = document.createElement("small");
    error.className = "text-danger d-block mt-1";
    error.innerText = message;
    element.parentElement.appendChild(error);
}

function showRadioError(id, message) {
    let element = document.getElementById(id);
    let error = document.createElement("small");
    error.className = "text-danger d-block mt-1";
    error.innerText = message;
    element.parentElement.appendChild(error);
}

// Removing old errors
function removeErrors() {
    document.querySelectorAll(".text-danger").forEach((error) => {
        error.remove();
    });
}