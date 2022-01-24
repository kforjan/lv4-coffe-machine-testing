const CoffeMachine = require("./../zad1");
let coffeMachine = new CoffeMachine(1, 1, false);
const assert = require("chai").assert;
const sinon = require("sinon");

describe("CoffeMachine class:", function () {
  describe("types of properties:", function () {
    it("coffeAmount is a number", function () {
      assert.isNumber(coffeMachine.coffeAmount);
    });

    it("waterAmmount is a number", function () {
      assert.isNumber(coffeMachine.waterAmmount);
    });

    it("powerStatus is a boolean", function () {
      assert.isBoolean(coffeMachine.powerStatus);
    });
  });

  describe("turnMachineOn()", function () {
    it("turnMachineOn() on turned off changes powerStatus to true from false", function () {
      coffeMachine.powerStatus = false;
      assert.equal(coffeMachine.powerStatus, false);
      coffeMachine.turnMachineOn();
      assert.equal(coffeMachine.powerStatus, true);
    });

    it("turnMachineOn() on turned on keeps powerStatus as true and shows a message in the console", function () {
      let spy = sinon.spy(console, "log");
      coffeMachine.powerStatus = true;
      assert.equal(coffeMachine.powerStatus, true);
      coffeMachine.turnMachineOn();
      assert.equal(coffeMachine.powerStatus, true);
      assert(spy.calledWith("Machine is already turned on !"));
      spy.restore();
    });
  });

  describe("turnMachineOff()", function () {
    it("turnMachineOff() on turned on changes powerStatus to false from true", function () {
      coffeMachine.powerStatus = true;
      assert.equal(coffeMachine.powerStatus, true);
      coffeMachine.turnMachineOff();
      assert.equal(coffeMachine.powerStatus, false);
    });

    it("turnMachineOff() on turned off keeps powerStatus as false and shows a message in the console", function () {
      let spy = sinon.spy(console, "log");
      coffeMachine.powerStatus = false;
      assert.equal(coffeMachine.powerStatus, false);
      coffeMachine.turnMachineOff();
      assert.equal(coffeMachine.powerStatus, false);
      assert(spy.calledWith("Machine is already turned off !"));
      spy.restore();
    });
  });

  describe("refill()", function () {
    it("refill() returns status 200 if reffilling is successful", function () {
      let spy = sinon.spy(console, "log");
      assert.equal(coffeMachine.refill(5, 15), 200);
      assert(spy.calledWith("Machine refilled !"));
      spy.restore();
    });

    it("refill() returns an error if reffilling is not successful", function () {
      assert.throws(
        function () {
          coffeMachine.refill("coffee", 20);
        },
        Error,
        /Illegal type/
      );
    });
  });

  describe("makeCoffe()", function () {
    it("makeCoffe() successfully makes a coffee if there is at least 5g of coffe and 15ml of water", function () {
      coffeMachine.waterAmmount = 15;
      coffeMachine.coffeAmount = 5;
      let water = coffeMachine.waterAmmount;
      let coffe = coffeMachine.coffeAmount;
      coffeMachine.makeCoffe();
      assert.equal(water - 15, coffeMachine.waterAmmount);
      assert.equal(coffe - 5, coffeMachine.coffeAmount);
    });

    it("makeCoffe() notifies the user that there's not enough coffee and/or water to make a coffee if there is less than 5g of coffee and 15ml of water", function () {
      let spy = sinon.spy(console, "log");
      coffeMachine.waterAmmount = 1;
      coffeMachine.coffeAmount = 1;
      let water = coffeMachine.waterAmmount;
      let coffe = coffeMachine.coffeAmount;
      coffeMachine.makeCoffe();
      assert.equal(water, coffeMachine.waterAmmount);
      assert.equal(coffe, coffeMachine.coffeAmount);
      assert(
        spy.calledWith(
          "You don´t have enough amount of ingredients for making coffe. Please refill!"
        )
      );
      spy.restore();
    });
  });
});
