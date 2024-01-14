// Complete the js code
function Car(make, model) {
	this.make = make;
	this.model = model;
	getMakeModel: function () {
		return `${this.make} ${this.model}`
	}
}

function SportsCar extends Car (make, model, topSpeed) {
	super(make,model);
	this.topSpeed = topSpeed;
	getTopSpeed: function() {
		return `${this.topSpeed}`
	}
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
