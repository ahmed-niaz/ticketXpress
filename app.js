const buyTicket = document.querySelector(`#buyTicket`);
buyTicket.addEventListener(`click`, function () {
  const ticketCounter = document.querySelector(`#ticketCounter`);
  ticketCounter.scrollIntoView({ behavior: "smooth" });
});

let selectedSeatsCount = 0;
let selectedSeats = [];

function ticketDetails(seat) {
  const price = 550;
  const classes = "business";
  const ticketConfirmation = document.getElementById("ticketConfirmation");
  const setColor = document.getElementById(seat);

  if (selectedSeats.includes(seat)) {
    const index = selectedSeats.indexOf(seat);
    selectedSeats.splice(index, 1);
    selectedSeatsCount--;
    setColor.style.backgroundColor = "";
    totalSeat();
  } else {
    if (selectedSeatsCount < 4) {
      selectedSeats.push(seat);
      selectedSeatsCount++;
      setColor.style.backgroundColor = "green";
      totalSeat();
    } else {
      alert("You cannot select more than four seats");
    }
  }

  ticketConfirmation.innerHTML = "";

  for (const selectedSeat of selectedSeats.slice(0, 4)) {
    const seatInfo = document.createElement("div");
    seatInfo.innerHTML = `
      <div class="flex justify-between">
        <h4>${selectedSeat}</h4>
        <h4>${classes}</h4>
        <h4>${price}</h4>
      </div>
    `;
    ticketConfirmation.appendChild(seatInfo);
  }

  const totalAmount = document.getElementById("totalPrice");
  const totalPrice = selectedSeatsCount * 550;
  totalAmount.innerText = `BDT ${totalPrice}`;
}

function totalSeat() {
  const initialSeat = document.getElementById("available-seat");
  const availableSeat = 40 - selectedSeats.length;
  initialSeat.innerText = `${availableSeat}`;
}

