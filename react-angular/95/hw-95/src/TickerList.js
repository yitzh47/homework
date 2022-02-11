import React from 'react';

export default function TickerList({listOfTickers}) {
    return (
        <>
            <h2>Available Tickers:</h2>
            <div>{listOfTickers.map(e => <div key={e}>Symbol: {e}</div>)}</div>
        </>
      
    );
}
