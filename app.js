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
    seatCount();
  } else {
    if (selectedSeatsCount < 4) {
      selectedSeats.push(seat);
      selectedSeatsCount++;
      setColor.style.backgroundColor = "#1DD100";
      totalSeat();
      seatCount();
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

  const grandAmount = document.getElementById("grandTotal");
  const grandPrice = selectedSeatsCount * 550;
  grandAmount.innerText = `BDT ${grandPrice}`;
}

function totalSeat() {
  const initialSeat = document.getElementById("available-seat");
  const availableSeat = 40 - selectedSeats.length;
  initialSeat.innerText = `${availableSeat}`;
}
function seatCount() {
  const updateSeat = document.getElementById(`seatCount`);
  updateSeat.innerText = `${selectedSeatsCount}`;
}
const applyBtn = document.querySelector(`#apply-btn`);

applyBtn.addEventListener("click", function () {
  const couponCode = document.querySelector("#coupon").value;
  const code = couponCode.split(" ").join("").toUpperCase();
  const totalPrice = selectedSeatsCount * 550;
  if (code === "NEW15") {
    const grandAmount = totalPrice * 0.15;
    const restAmount = totalPrice - grandAmount.toFixed(2);
    document.getElementById("grandTotal").innerText = `BDT ${restAmount.toFixed(
      2
    )}`;
    const promoContainer = document.getElementById("promoContainer");
    promoContainer.classList.add("hidden");
  } else if (code === "COUPLE20") {
    const grandAmount = totalPrice * 0.2;
    const restAmount = totalPrice - grandAmount.toFixed(2);
    document.getElementById("grandTotal").innerText = `BDT ${restAmount.toFixed(
      2
    )}`;
    const promoContainer = document.getElementById("promoContainer");
    promoContainer.classList.add("hidden");
  } else {
    alert("Invalid coupon code");
  }
});


function popupOpen() {
  const popupContainer = document.querySelector(`#popupContainer`);
  popupContainer.classList.remove(`hidden`);
  const main = document.querySelector(`#main`);
  main.classList.add(`hidden`)
  const footer = document.querySelector(`#footer`);
  footer.classList.add(`hidden`)
}

const popupBtn = document.querySelector(`#popupBtn`);
popupBtn.addEventListener("click", popupOpen);

function popupClose() {
  popupContainer.classList.add(`hidden`);
  const main = document.querySelector(`#main`);
  main.classList.remove(`hidden`)
  const footer = document.querySelector(`#footer`);
  footer.classList.remove(`hidden`)
  const ticketCounter = document.querySelector(`#ticketCounter`);
  ticketCounter.scrollIntoView({ behavior: "smooth" });
  location.reload();
}
