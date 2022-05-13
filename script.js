const paymentForm = document.getElementById("form");
const cardName = document.getElementById("name");
const cardNum = document.getElementById("num");
const cvv = document.getElementById("cvv-code");
var numbers = "^[0-9]+$";

paymentForm.addEventListener("submit", (e) => {
    //Cardholder Name Validation
    if (cardName.value.match(numbers) || (cardName.value.length < 6)) {
        document.getElementById("error-name").innerHTML="Name can only contain alphabets and must be longer than 6 characters!";
        e.preventDefault();
    }

    //Card Number Validation
    if (cardNum.value.length <= 14) {
        document.getElementById("error-num").innerHTML="Invalid Card Number! Please Try Again.";
        e.preventDefault();
    }

    //AmEx Validation
    if ((cardNum.value.startsWith(34) || cardNum.value.startsWith(37)) && cardNum.value.length <= 14) {
        document.getElementById("error-num").innerHTML="Invalid AmEx Card Number! Please Try Again.";
        e.preventDefault();
    }

    //Visa Validation
    if ((cardNum.value.startsWith(4)) && (cardNum.value.length <= 15)) {
        document.getElementById("error-num").innerHTML="Invalid Visa Card! Please Try Again.";
        e.preventDefault();
    }

    //Mastercard Validation
    if ((cardNum.value.startsWith(51) || cardNum.value.startsWith(55)) && cardNum.value.length <= 15) {
        document.getElementById("error-num").innerHTML="Invalid Mastercard Card! Please Try Again.";
        e.preventDefault();
    }
    
    //CVV Validation
    if (cvv.value.length > 4) {
        document.getElementById("error-cvv").innerHTML="Invalid CVV code!";
        e.preventDefault();
    }
    else if (cvv.value.length < 4 && (cardNum.value.startsWith(34) || cardNum.value.startsWith(37))) {
        document.getElementById("error-cvv").innerHTML="Invalid AmEx CVV Code!";
        e.preventDefault();
    }
    else if (cvv.value.length < 3) {
        document.getElementById("error-cvv").innerHTML="Invalid CVV Code!";
        e.preventDefault();
    }
})