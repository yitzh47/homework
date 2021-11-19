(function () {
    'use strict';

    class Student {

        constructor(firstName, lastName, age, grade) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.grade = grade;
        }

        static printStudents(firstOrLastOrder, ...students) {
            if (firstOrLastOrder.toLowerCase() === "first") {
                for (let i = 0; i < students.length; i++) {
                    console.log(`The students first name is ${students[i].firstName} and their last name is ${students[i].lastName}`);
                }
            }
            else if (firstOrLastOrder.toLowerCase() === "last") {
                for (let i = 0; i < students.length; i++) {
                    console.log(`The students last name is ${students[i].lastName} and their first name is ${students[i].firstName}`);
                }
            }
            else{
                throw new Error("Order request not valid.");
            }
        }

        cloneAndChange() {
            let {firstName, lastName, ...rest} = this;
            return {
                firstName: lastName,
                lastName: firstName,
                ...rest
            };
        }
    }

    const studentArray = [
        new Student("aFirst", "aLast", "aAge", "aGrade"),
        new Student("bFirst", "bLast", "bAge", "bGrade"),
        new Student("cFirst", "cLast", "cAge", "cGrade")
    ];

    console.log("Called function with order of first, last.");
    Student.printStudents("first", ...studentArray);
 //   Student.printStudents("none", ...studentArray);
    console.log("Called function with order of last, first.");
    Student.printStudents("last", ...studentArray);

    console.log("clone", studentArray[0].cloneAndChange());

  
    
}());