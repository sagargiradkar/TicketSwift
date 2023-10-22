// Get references to the button and the popup
const paymentButton = document.getElementById("paymentButton");
const paymentPopup = document.getElementById("paymentPopup");

// Get the close button inside the popup
const closePopup = document.getElementById("closePopup");

// Add an event listener to the payment button
paymentButton.addEventListener("click", function() {
    // Show the payment popup
    paymentPopup.style.display = "block";
});

// Add an event listener to the close button
closePopup.addEventListener("click", function() {
    // Hide the payment popup
    paymentPopup.style.display = "none";
});