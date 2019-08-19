import React from 'react';

const ToodayTemp = (props) => {
  const { main, sys, wind, weather, coord, clouds } = props.data

  let rain = [];
  if (props.data.rain !== undefined) {
    const rainObj = props.data.rain
    rain = Object.keys(rainObj).map(i => rainObj[i])
  }

  const dateSunrise = new Date(sys.sunrise * 1000).toTimeString().substring(0, 5);
  const dateSunset = new Date(sys.sunset * 1000).toTimeString().substring(0, 5);

  const iconURL = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`


  return (
    <div className="toodayTemp">
      <div className="toodayTemp_temperature">
        <img src={iconURL} alt="weather icon" />
        <div>
          <h2>{(main.temp).toFixed(1)} &deg;C</h2>
          <p>{weather[0].description}</p>
        </div>
      </div>
      <div className="toodayTemp_parameters">
        <ul>
          <li>Wind: <span>{wind.speed} m/s</span></li>
          <li>Pressure: <span>{main.pressure} hpa</span></li>
          {props.data.rain ? <li>Rain <small>(Last 3 hours)</small>: <span>{rain} mm</span></li> : <li>Rain <small>(Last 3 hours)</small>: <span>0 mm</span></li>}
          <li>Cloudiness: <span>{clouds.all}%</span></li>
          <li>Sunrise: <span>{dateSunrise}</span></li>
          <li>Sunset: <span>{dateSunset}</span></li>
          <li>Geo coords: <span>[{coord.lat}, {coord.lon}]</span></li>
        </ul>
      </div>
    </div>
  )
}

export default ToodayTemp;