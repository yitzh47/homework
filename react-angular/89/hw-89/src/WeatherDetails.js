import React from 'react'

export default function WeatherDetails(props) {
    
    let weather = props.zip;

    return (
        <>
            <div>
                <h1>Weather in {weather.name}</h1>
                <p>Temperature: {weather.main.temp}</p>
                <p>Humidity: {weather.main.humidity}</p>

            </div>      
        </>
    )
}
