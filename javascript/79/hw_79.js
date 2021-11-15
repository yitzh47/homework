(function (){
    'use strict';

    class Vehicle {
        speed = 0;

        constructor(color){
            this.color = color;
        }

        go(speed){
            this.speed = speed;
            console.log(`now going at speed ${this.speed}`);
        }

        print(){
            console.log(`color ${this.color}, speed ${this.speed}.`);
        }
    }

    class Plane extends Vehicle {

        speed = super.speed;

        constructor(color){
            super(color);
        }
        go(speed){
            this.speed = speed;
            console.log(`now FLYING at speed ${this.speed}.`);
        }
    }

    let v = new Vehicle("red");
    v.go(10);
    v.print();

    let p = new Plane("blue");
    p.go(20);
    p.print();

    console.log(v);
    console.log(p);
 
}());