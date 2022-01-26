import './quiz.css';

(function () {
    'use strict';

    const countOne = document.getElementById('countryOne');
    const countTwo = document.getElementById('countryTwo');


    const baseUrl = 'https://free.currconv.com';
    const apiKey = 'apiKey=afcee9d898bba6b6df38';

    async function fetchFunc() {
        try {
            let r = await fetch(baseUrl + '/api/v7/countries?' + apiKey);
            if (!r.ok) {
                throw new Error(r.status, r.statusText);
            }
            let j = await r.json();
            return j;
        } catch (e) {
            console.error(e);
        }

    }
    async function populateCurrencyOptions() {
        let r = await fetchFunc();
        let countries = r.response;
        for (let country in countries) {
            if (countries.hasOwnProperty(country)) {
                let countryOption = document.createElement(`<option value=${country.currencyId}> ${country.name} ${currencyName}</option>`);
                countOne.appendChild(countryOption);
                countTwo.appendChild(countryOption);
            }
        }
    }
    populateCurrencyOptions();

    countOne.addEventListener('change', c => console.log(c));
}());