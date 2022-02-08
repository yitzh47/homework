import React from 'react';
import fetcher from './fetcher';
import TickerList from './TickerList';
import { useState, useEffect } from 'react';

export default function Ticker() {

    const apiKey = "";
    const [listOfTickers, setListOfTickers] = useState([]);

    useEffect(() => {
        (async () => {
            const r = await fetcher({ url: ' https://finnhub.io/api/v1/stock/symbol?exchange=US', apiKey });
            console.log(await r);
            const tickers = r.map(e => e.displaySymbol);
            setListOfTickers(tickers);
        })();
    }, []);



  return (<div>
      {listOfTickers.length > 0 ? <TickerList listOfTickers={listOfTickers} /> : null}
      
  </div>);
}
