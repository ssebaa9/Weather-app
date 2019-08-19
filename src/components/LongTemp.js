import React from 'react';
import moment from 'moment'

const LongTemp = (props) => {
  const { list } = props.data

  const dates = [
    moment().format().substring(0, 10),
    moment().add(1, 'days').format().substring(0, 10),
    moment().add(2, 'days').format().substring(0, 10),
    moment().add(3, 'days').format().substring(0, 10),
    moment().add(4, 'days').format().substring(0, 10)
  ]

  const hourlyWeadher = [];

  let day1 = []
  let day2 = []
  let day3 = []
  let day4 = []
  let day5 = []

  list.forEach((day) => {
    if (day.dt_txt.substring(0, 10) === dates[0]) {
      day1.push({
        id: day.dt,
        hour: day.dt_txt.substring(11, 16),
        temp: day.main.temp,
        description: day.weather[0].description,
        wind: day.wind.speed,
        clouds: day.clouds.all,
        pressure: day.main.pressure,
        weatherIcon: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
      })
    } else if (day.dt_txt.substring(0, 10) === dates[1]) {
      day2.push({
        id: day.dt,
        hour: day.dt_txt.substring(11, 16),
        temp: day.main.temp,
        description: day.weather[0].description,
        wind: day.wind.speed,
        clouds: day.clouds.all,
        pressure: day.main.pressure,
        weatherIcon: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
      })
    } else if (day.dt_txt.substring(0, 10) === dates[2]) {
      day3.push({
        id: day.dt,
        hour: day.dt_txt.substring(11, 16),
        temp: day.main.temp,
        description: day.weather[0].description,
        wind: day.wind.speed,
        clouds: day.clouds.all,
        pressure: day.main.pressure,
        weatherIcon: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
      })
    } else if (day.dt_txt.substring(0, 10) === dates[3]) {
      day4.push({
        id: day.dt,
        hour: day.dt_txt.substring(11, 16),
        temp: day.main.temp,
        description: day.weather[0].description,
        wind: day.wind.speed,
        clouds: day.clouds.all,
        pressure: day.main.pressure,
        weatherIcon: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
      })
    } else if (day.dt_txt.substring(0, 10) === dates[4]) {
      day5.push({
        id: day.dt,
        hour: day.dt_txt.substring(11, 16),
        temp: day.main.temp,
        description: day.weather[0].description,
        wind: day.wind.speed,
        clouds: day.clouds.all,
        pressure: day.main.pressure,
        weatherIcon: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
      })
    }
  })

  hourlyWeadher.push(day1, day2, day3, day4, day5)

  const weatherHourlyList = hourlyWeadher.map((day, index) => (
    <div key={index} className="hourlyWeadher">
      <h3>{dates[index]}</h3>
      {day.map((item) => (
        <div className="hourlyWeadher_list" key={item.id}>
          <p>{item.hour}</p>
          <img src={item.weatherIcon} alt="weather icon" />
          <div className='hourlyWeadher_parameters'>
            <span className="temp">{item.temp.toFixed(1)} &deg;C</span>
            <span className="description">{item.description}</span>
            <span className="parameter">Wind: {item.wind} m/s</span>
            <span className="parameter">Cloudiness: {item.clouds}%</span>
            <span className="parameter">Pressure: {item.pressure} hpa</span>
          </div>
        </div>
      ))}
    </div>
  ))

  return (
    <div className="longTemp">
      {weatherHourlyList}
    </div>
  );
}

export default LongTemp;