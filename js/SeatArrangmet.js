const cte = document.querySelector('.cte');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
  
  setMovieData(movieSelect.selectedIndex, movieSelect.value);
}

// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event
cte.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});

// Initial count and total set
updateSelectedCount();

   // Get references to the buttons and popups
   const paymentButton = document.getElementById("paymentButton");
   const paymentPopup = document.getElementById("paymentPopup");
   const termsPopup = document.getElementById("termsPopup");

   // Function to show the payment popup
   function showPaymentPopup() {
       paymentPopup.style.display = "block";
   }

   // Function to close the payment popup
   function closePopup() {
       paymentPopup.style.display = "none";
   }

   // Function to show the terms popup
   function showTermsPopup() {
       termsPopup.style.display = "block";
   }

   // Function to close the terms popup
   function closeTermsPopup() {
       termsPopup.style.display = "none";
   }

   // Function to accept the terms and close the payment popup
   function acceptTerms() {
       closePopup();
       // You can add further actions here after the user accepts the terms.
   }

   // Add an event listener to the payment button
   paymentButton.addEventListener("click", function() {
       showTermsPopup(); // Show the terms and conditions popup
   });