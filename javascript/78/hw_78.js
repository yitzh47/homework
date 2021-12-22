(function () {
    'use strict';

    function Vehicle(color) {
        this.color = color;
    }

    Vehicle.prototype.go = function (speed) {
        this.speed = speed;
        console.log(`now going at speed ${this.speed}mph`);
    };

    Vehicle.prototype.print = function () {
        console.log(`The vehicles color is ${this.color}, while the vehicles speed is ${this.speed}`);
    };

    function Plane(color) {
        this.color = color;
    }
    Plane.prototype = Object.create(Vehicle.prototype);

    Plane.prototype.go = function (speed) {
        this.speed = speed;
        console.log(`now FLYING at speed ${this.speed}mph`);
    };

    const v = new Vehicle("red");
    v.go("100");
    v.print();
    console.log(v);

    const v2 = new Vehicle("red");
    v2.go("100");
    v2.print();
    console.log(v2);

    const v4 = new Vehicle("red");
    v4.go("100");
    

    const p = new Plane("black");
    p.go("500");
    p.print();
    console.log(p);


}());