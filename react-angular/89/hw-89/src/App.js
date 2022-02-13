
import './App.css';
import React, { Component } from 'react';
import WeatherDetails from './WeatherDetails';

class App extends Component {

  constructor(props) {
    super(props);
    this.zipCodes = ['06710', '10952', '08710'];
    this.appId = 'a45906b769e3c9c65cc8e6541c05941f';
    this.state = {
      weather: null
    };

  }

  componentDidMount() {
    setTimeout(() => {
      this.fetchWeather(this.zipCodes[0])
    }, 1000);
  }

  async fetchWeather(zip) {
    try {
      const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${this.appId}&units=imperial&lang=he`);
      if (!r.ok) {
        throw new Error(`${r.status} ${r.statusText}`);
      }
      const weatherResponse = await r.json();
      this.setState({
        weather: weatherResponse
      });
      console.log(this.state.weather)
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    let wthrDetails = this.state.weather != null ? <WeatherDetails zip={this.state.weather} /> : null;
    return (
      <>
        {wthrDetails}


      </>
    )
  }
}

export default App;
