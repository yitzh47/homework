import React from 'react';

export default function ProfileHtml(props) {
    const ticker = props.info;
    const quote = props.quote;

    let upOrDown;
    let arrow;

    if (quote.c > quote.o) {
         upOrDown = "green";
         arrow = "\u{2191}"
    } else if (quote.c < quote.o) {
        upOrDown = "red";
        arrow = "\u{2193}"
    } else { upOrDown = "none";
        arrow = "\u{2194}" }

    return <div>
        <h1>{ticker.name} - Ticker: "{ticker.ticker}"</h1>
        <h2 className={upOrDown}>Last Quote: {quote.c} {arrow} </h2>
        <img src={ticker.logo} alt={ticker.name} />
        <ul>
            <li>Industry: {ticker.finnhubIndustry}</li>
            <li>Market Cap: ${ticker.marketCapitalization}</li>
            <li>Shares Outstanding: {ticker.shareOutstanding}</li>
            <li>Website: <a href={ticker.weburl} target="_blank" rel="noopener noreferrer">{ticker.weburl}</a></li>
        </ul>
        
            
        


    </div>;
}
