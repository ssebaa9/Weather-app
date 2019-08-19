import React, { Component } from 'react';

class Search extends Component {
  state = {
    cityName: ''
  }

  handleCityNameSearch = (e) => {
    e.preventDefault();
    const cityName = e.target.elements.cityName.value;
    this.setState(() => ({
      cityName
    }))
    if (cityName.trim() !== '') {
      this.props.handleFetchData(cityName)
    } else {
      return;
    }

    e.target.elements.cityName.value = '';
  }

  render() {
    return (
      <div className="search">
        <form value={this.state.cityName} onSubmit={this.handleCityNameSearch}>
          <input placeholder="Your city name" type="text" name="cityName" />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;