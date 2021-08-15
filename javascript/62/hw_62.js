'use strict';



const dayOfweek = (function(){

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    function getDayName(num){
        return days[num-1];
    }

    function getDayNumber(name){
        return days.findIndex(n => n.toUpperCase() === name.toUpperCase()) + 1;
    }

    return{
        getDayName: getDayName,
        getDayNumber: getDayNumber
    };
}());

console.log(dayOfweek.getDayName(1));
console.log(dayOfweek.getDayNumber('tuesday'));

const intCalc = (function(){

    let interest_percentage = 0;
    let years = 0;

    function setRate(percentage){
        let x = "1." + percentage;
        interest_percentage = x;
    }

    function setYears(yr){
        years = yr;
    }

    function calculate(amount){
        for (let i = 0; i < years; i++) {
            amount = amount * interest_percentage;
        }
        return amount;
    }

    return {
        setRate: setRate,
        setYears: setYears,
        calculate: calculate
    };

}());

intCalc.setRate(20);
intCalc.setYears(3);
console.log('intCalc.calculate(100)',intCalc.calculate(100));