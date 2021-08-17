(function () {
     'use strict';
  
    function printPerson(/*person*/ datePrinted, timePrinted) {
      // console.log(person.name, person.email);
      console.log(this.name, this.email, datePrinted, timePrinted);
    }
  
    const potus = {
      name: 'Joe Biden',
      email: 'jbiden@whitehouse.gov',
      print: function () {
        console.log(this.name, this.email);
      }
      //print: printPerson
    };
  
    const vpotus = {
      name: 'Kamala',
      email: 'kbiden@whitehouse.gov',
      print: function () {
        console.log(this.name, this.email);
      }
      //print: printPerson
    };
  
    //potus.print();
    //printPerson(/*potus*/);
    //vpotus.print();
  
      const thePrintFromJoe = potus.print;
      thePrintFromJoe();
  
    // call / apply
  
    // thePrintFromJoe.call(potus);
    // thePrintFromJoe.call(vpotus);
    // printPerson.call(potus, '8/15/21', '10:27');
  
    // thePrintFromJoe.apply(potus);
    // thePrintFromJoe.apply(vpotus);
    // printPerson.apply(potus, ['8/15/21', '10:27']);
  
  }());