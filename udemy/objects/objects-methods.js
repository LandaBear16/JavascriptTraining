const restaurant = {
  name: "Bubba Gumps",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function(partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  }
};

let status = restaurant.checkAvailability(76);

console.log(status);
