class CoffeMachine {
  constructor(coffeAmount, waterAmmount, powerStatus) {
    this.coffeAmount = coffeAmount;
    this.waterAmmount = waterAmmount;
    this.powerStatus = powerStatus;
  }

  turnMachineOn() {
    if (this.powerStatus === false) {
      this.powerStatus = true;
      return this.powerStatus;
    }
    console.log("Machine is already turned on !");
    return this.powerStatus;
  }

  turnMachineOff() {
    if (this.powerStatus === true) {
      this.powerStatus = false;
      return this.powerStatus;
    }
    console.log("Machine is already turned off !");
    return this.powerStatus;
  }

  refill(coffe, water) {
    if (Number.isInteger(coffe) && Number.isInteger(water)) {
      this.coffeAmount = coffe;
      this.waterAmmount = water;
      console.log("Machine refilled !");
      return 200;
    }
    throw new Error("Illegal type");
  }

  makeCoffe() {
    if (this.coffeAmount >= 5 && this.waterAmmount >= 15) {
      this.coffeAmount -= 5;
      this.waterAmmount -= 15;
    } else {
      console.log(
        "You don´t have enough amount of ingredients for making coffe. Please refill!"
      );
    }
  }
}

module.exports = CoffeMachine;
