// variable for memory price, storage price , delivery charge and promo price
const memoryPrice = document.getElementById("memory-price");
const storagePrice = document.getElementById("storage-price");
const deliveryCharge = document.getElementById("delivery-charge");
const promoTotal = document.getElementById("promo-price");
const promoButton = document.getElementById("promo-button");

// function for memory price update
function memoryPriceUpdate(memorySize) {
  const memoryPriceValue = document.getElementById("memory-" + memorySize);
  const memoryPriceText = memoryPriceValue.value;
  memoryPrice.innerText = parseInt(memoryPriceText);
  total();
}
// function for storage price update
function storagePriceUpdate(storageSize) {
  const storagePriceValue = document.getElementById("storage-" + storageSize);
  const storagePriceText = storagePriceValue.value;
  storagePrice.innerText = parseInt(storagePriceText);
  total();
}
// function for storage delivery charge update

function deliveryChargeUpdate(deliveryMethod) {
  const deliveryChargeValue = document.getElementById(
    "delivery-" + deliveryMethod
  );
  const deliveryChargeText = deliveryChargeValue.value;
  deliveryCharge.innerText = parseInt(deliveryChargeText);
  total();
}

// function for total price update and promo total update

function total() {
  const total = document.getElementById("total-price");
  const totalMain =
    1299 +
    Number(memoryPrice.innerText) +
    Number(storagePrice.innerText) +
    Number(deliveryCharge.innerText);
  // console.log(deliveryPrice.innerText);
  total.innerText = totalMain;
  promoTotal.innerText = totalMain;
  return totalMain;
}
// function for promo total update with promo code

function promoTotalUpdateWithCode() {
  const promoInput = document.getElementById("promo-input");
  const promoValue = promoInput.value;
  const promoTotalValue = parseInt(promoTotal.innerText);
  if (promoValue == "stevekaku") {
    const promoTotalCalc = promoTotalValue * 0.8;
    const promoTotalUpdate = parseFloat(promoTotalCalc);
    promoTotal.innerText = promoTotalUpdate;
    promoInput.value = "";
    promoButton.innerText = "Applied";
    promoButton.disabled = true;
  }
}
//event handler for memory option

document.getElementById("memory-16gb").addEventListener("click", function () {
  memoryPriceUpdate("16gb");
});
document.getElementById("memory-8gb").addEventListener("click", function () {
  memoryPriceUpdate("8gb");
});

//event handler for storage option

document.getElementById("storage-256gb").addEventListener("click", function () {
  storagePriceUpdate("256gb");
});
document.getElementById("storage-512gb").addEventListener("click", function () {
  storagePriceUpdate("512gb");
});
document.getElementById("storage-1tb").addEventListener("click", function () {
  storagePriceUpdate("1tb");
});

//event handler for delivery option

document.getElementById("delivery-free").addEventListener("click", function () {
  deliveryChargeUpdate("free");
});
document.getElementById("delivery-paid").addEventListener("click", function () {
  deliveryChargeUpdate("paid");
});

//event handler for promo code

document.getElementById("promo-button").addEventListener("click", function () {
  promoTotalUpdateWithCode();
});
