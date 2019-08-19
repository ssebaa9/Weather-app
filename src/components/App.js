import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import ToodayTemp from './ToodayTemp';
import LongTemp from './LongTemp';
import ChooseHowLongTemp from './ChooseHowLongTemp';
import CityNotFound from './CityNotFound';

class App extends Component {
  state = {
    cityName: '',
    data: [],
    cityNotFound: false,
    chooseTemp: 'tooday'
  }

  handleFetchData = (cityName) => {
    this.setState(() => ({
      cityName,
    }))
    const urls = [
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=233ac2532ffe4f8d59e4f53c577329fc`,
      `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&APPID=233ac2532ffe4f8d59e4f53c577329fc`
    ];

    let dataArray = []

    Promise.all(urls.map(url =>
      fetch(url)
        .then((response) => {
          if (response.status === 200) return response.json()
          else {
            this.setState(() => ({
              cityNotFound: true
            }))
            throw new Error("Can't find the city")
          }
        })
        .then((data) => {
          dataArray.push(data)
          return dataArray
        })
        .then((data) => {
          return data.sort((a, b) => {
            const objectLenghtA = Object.keys(a).length
            const objectLenghtB = Object.keys(b).length
            if (objectLenghtA < objectLenghtB) return 1
            if (objectLenghtA > objectLenghtB) return -1
            else return 0
          })
        })
        .then((data) => {
          this.setState(() => ({
            data,
            cityNotFound: false
          }))
        })
    ))
  }

  handleChangeHowLongTemp = (chooseTemp) => {
    this.setState(() => ({
      chooseTemp
    }))
  }

  render() {
    const { data, chooseTemp, cityNotFound } = this.state
    const dateNow = new Date().toLocaleString().substring(0, 17)
    return (
      <div className="App">
        <Header />
        <Search handleFetchData={this.handleFetchData} />
        <ChooseHowLongTemp handleChangeHowLongTemp={this.handleChangeHowLongTemp} />
        {cityNotFound && <CityNotFound />}

        {data.length > 1 &&
          <div className="cityName">
            <h2>Weather in <span>{data[0].name}</span>, {data[0].sys.country}</h2>
            <small>{dateNow}</small>
          </div>
        }

        {data.length > 1 && chooseTemp === 'tooday' ? <ToodayTemp data={data[0]} /> : ''}
        {data.length > 1 && chooseTemp === 'fiveDays' ? <LongTemp data={data[1]} /> : ''}
      </div>
    );
  }

}

export default App;
