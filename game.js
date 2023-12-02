// Vehicle constructor function
function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
}

// Adding the Vehicle prototype
Vehicle.prototype.accelerate = function() {
    this.speed += 85;
    console.log(`${this.brand} ${this.model} is accelerating. Current speed: ${this.speed} km/h`);
};

Vehicle.prototype.brake = function() {
    this.speed -= 40;
    console.log(`${this.brand} ${this.model} is braking. Current speed: ${this.speed} km/h`);
};

Vehicle.prototype.refuel = function() {
    console.log(`${this.brand} ${this.model} is refueling.`);
};

// Car constructor function inheriting from Vehicle
function Car(brand, model, speed, fuelType, numberOfWheels) {
    // Call the parent constructor with Car's context
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels;
}


Car.prototype = Object.create(Vehicle.prototype);


Car.prototype.honk = function() {
    console.log(`${this.brand} ${this.model} is honking.`);
};

// Airplane constructor function inheriting from Vehicle
function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
   
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;
}


Airplane.prototype = Object.create(Vehicle.prototype);


Airplane.prototype.takeOff = function() {
    console.log(`${this.brand} ${this.model} is taking off.`);
};

// Create instances of Car and Airplane
let myCar = new Car('Mahindra', 'Thar', 0, 'Petrol', 4);
let myAirplane = new Airplane('Gotha Bomber', 'VIIs', 0, 'Jet Fuel', 6, true);


myCar.accelerate();
myCar.brake();
myCar.refuel();
myCar.honk();

myAirplane.accelerate();
myAirplane.brake();
myAirplane.refuel();
myAirplane.takeOff();
