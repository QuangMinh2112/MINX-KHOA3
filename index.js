const myCar = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

myCar.prototype.accelerte = function () {
  return (this.speed += 10);
};
myCar.prototype.brake = function () {
  return (this.speed -= 5);
};
//Tang ga
const BMW = new myCar("BMW", 120);
const Merceder = new myCar("Merceder", 95);
console.log(BMW.accelerte());
console.log(Merceder.accelerte());

//Giam? ga

const brakeBMW = new myCar("BMW", 120);
console.log(brakeBMW.brake());
const brakeMerceder = new myCar("Merceder", 95);
console.log(brakeMerceder.brake());
