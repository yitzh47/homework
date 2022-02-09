import React from 'react';

export default async function fetcher({ url, apiKey}) {

    const x = []

    const r = await fetch(`${url}${apiKey}`);
    const data = await r.json();
    //const stocks = data.results;
    /*stocks.forEach(e => {
        x.push(e.ticker);
    });*/
    return data;
    // if (data.next_url){
    //     url = data.next_url;
    //     tickers({url, setListOfTickers, listOfTickers, apiKey});
    // }
}
