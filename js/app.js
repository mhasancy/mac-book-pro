// global variable
const memoryPrice = document.getElementById("memory-price");
const storagePrice = document.getElementById("storage-price");
const deliveryCharge = document.getElementById("delivery-charge");
const totalPrice = document.getElementById("total-price");
const promoButton = document.getElementById("promo-button");
const promoTotal = document.getElementById("promo-price");

//function for memory, storage and delivery price update

function PriceUpdate(values) {
  //condition for memory price update
  if (values == "8gb" || values == "16gb") {
    const memoryPriceUpdated = document.getElementById(
      "memory-" + values
    ).value;
    memoryPrice.innerText = parseInt(memoryPriceUpdated);
  }
  //condition for storage price update
  else if (values == "256gb" || values == "512gb" || values == "1tb") {
    const storagePriceUpdated = document.getElementById(
      "storage-" + values
    ).value;
    storagePrice.innerText = parseInt(storagePriceUpdated);
  }
  //condition for delivery charge update
  else if (values == "free" || values == "paid") {
    const deliveryChargeUpdated = document.getElementById(
      "delivery-" + values
    ).value;
    deliveryCharge.innerText = parseInt(deliveryChargeUpdated);
  }
  //total price update and button activation
  totalBalanceUpdated();
  promoButtonActivate();
}

// function for total price update and promo total update

function totalBalanceUpdated() {
  //total price updated
  const totalPriceUpdated =
    1299 +
    parseInt(memoryPrice.innerText) +
    parseInt(storagePrice.innerText) +
    parseInt(deliveryCharge.innerText);
  //total price and promo main price update
  totalPrice.innerText = totalPriceUpdated;
  promoTotal.innerText = totalPriceUpdated;
}

// function for promo total update with promo code

function promoTotalUpdateWithCode() {
  const promoInput = document.getElementById("promo-input");
  //promo code condition
  if (promoInput.value == "stevekaku") {
    //promo price calculation
    const promoTotalUpdate = parseFloat(totalPrice.innerText) * 0.8;
    //promo price update
    promoTotal.innerText = promoTotalUpdate;
    promoInput.value = "";
    //promo button disabling
    promoButton.innerText = "Applied";
    promoButton.disabled = true;
  }
}

// function for promo button enabling

function promoButtonActivate() {
  promoButton.disabled = false;
  promoButton.innerText = "Apply";
}

//event handler for memory option
document.getElementById("memory-16gb").addEventListener("click", function () {
  PriceUpdate("16gb");
});
document.getElementById("memory-8gb").addEventListener("click", function () {
  PriceUpdate("8gb");
});

//event handler for storage option
document.getElementById("storage-256gb").addEventListener("click", function () {
  PriceUpdate("256gb");
});
document.getElementById("storage-512gb").addEventListener("click", function () {
  PriceUpdate("512gb");
});
document.getElementById("storage-1tb").addEventListener("click", function () {
  PriceUpdate("1tb");
});

//event handler for delivery option
document.getElementById("delivery-free").addEventListener("click", function () {
  PriceUpdate("free");
});
document.getElementById("delivery-paid").addEventListener("click", function () {
  PriceUpdate("paid");
});

//event handler for promo code
promoButton.addEventListener("click", function () {
  promoTotalUpdateWithCode();
});
