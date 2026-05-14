let form = document.querySelector("form");
let submitBtn = document.querySelector('button[type="submit"]');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Personal Information
    let fullName = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let dob = document.getElementById("dob").value;

    // Gender Radio Button
    let gender = document.querySelector('input[name="gender"]:checked');

    // Academic Details
    let qualification = document.getElementById("qualification").value;
    let percentage = document.getElementById("percentage").value;

    // Course Information
    let course = document.getElementById("course").value;

    // Checkbox Values
    let batchTiming = [];
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {  
        if (checkbox.checked) {
            batchTiming.push(checkbox.value);
        }
    });

    // Address
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let pincode = document.getElementById("pincode").value;

    // Guardian Details
    let guardianName = document.getElementById("guardianname").value;
    let guardianContact = document.getElementById("guardiancontact").value;

    // Additional Information
    let reference = document.getElementById("reference").value;

    // Object
    const studentData = {
        fullName: fullName,
        email: email,
        mobile: mobile,
        dob: dob,
        gender: gender ? gender.value : "Not Selected",
        qualification: qualification,
        percentage: percentage,
        course: course,
        batchTiming: batchTiming,
        address: address,
        city: city,
        pincode: pincode,
        guardianName: guardianName,
        guardianContact: guardianContact,
        reference: reference
    };

    validatedata(studentData)?console.log(studentData): alert("invalid data")
    
    function validatedata(data){
        let isValid = true;

    }
});
