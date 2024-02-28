function notifyCustomer() {
  console.log('Pizza is ready');
}

function cookPizza(onPizzaDone) {
  setTimeout(() => {
    console.log('Pizza is done');
    onPizzaDone();
  }, 3000);

  // console.log("Pizza is done")
}

cookPizza(notifyCustomer);
