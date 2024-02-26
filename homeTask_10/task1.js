function busSchedule(message, ms) {
  console.log(`${message} ${ms}!`)
}

setTimeout(busSchedule, 5000, 'Bus arrive to the station after:', '5000ms')
