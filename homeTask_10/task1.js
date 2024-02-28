function busArriving(message, ms) {
  console.log(`${message} ${ms}!`);
}

setTimeout(busArriving, 5000, 'Bus arrive to the station after:', '5000ms');
