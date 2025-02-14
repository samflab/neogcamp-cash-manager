const billAmount = document.getElementById("bill-amount");
const cashGiven = document.getElementById("cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const typeNoOfNotes = document.querySelectorAll(".typeNo-Of-Notes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmt() {
  message.style.display = "none";
  if (billAmount.value > 0) {
  } else {
    message.style.display = "block";
    message.innerText = "Please enter amount greater than 0";
  }
  if (cashGiven.value > billAmount.value) {
    message.style.display = "block";
    message.innerText = "You are short on cash.";
  }

  const amountToBeReturned = cashGiven.value - billAmount.value;
  // console.log(
  //   billAmount.value,
  //   " ",
  //   cashGiven.value,
  //   " ",
  //   amountToBeReturned
  // );
  changeCalculater(amountToBeReturned);
});

function changeCalculater(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const noOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned %= availableNotes[i];
    typeNoOfNotes[i].innerText = noOfNotes;
  }
}
