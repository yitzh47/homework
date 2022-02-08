import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetcher from './fetcher';
import ProfileHtml from './ProfileHtml';

export default function SelectedTicker() {

  const { id } = useParams();
  const [tickerInfo, setTickerInfo] = useState(null);
  const [tickerQuote, setTickerQuote] = useState(null);

  const apiKey = "";

  useEffect(() => {
    (async () => {
      const r = await fetcher({ url: `https://finnhub.io/api/v1/stock/profile2?symbol=${id}`, apiKey });
      console.log(r);
      setTickerInfo(r);
      const qr = await fetcher({ url: `https://finnhub.io/api/v1/quote?symbol=${id}`, apiKey });
      console.log(qr);
      setTickerQuote(qr);
    })();
    
  }, [id]);
  //console.log(id, "hi");
  return(
    <>
      {tickerInfo !== null && tickerQuote !== null ? <ProfileHtml info={tickerInfo} quote={tickerQuote} /> : null}
    </>)


}