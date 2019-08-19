import React, { Component } from 'react';

class ChooseHowLongTemp extends Component {
  state = {
    howLongTemp: 'tooday'
  }

  handleHowLongTemp = (howLongTemp) => {
    this.props.handleChangeHowLongTemp(howLongTemp)
    this.setState(() => ({
      howLongTemp
    }))
  }
  render() {
    return (
      <div className="chooseHowLongTemp">
        <button className={this.state.howLongTemp === 'tooday' ? 'is-active' : ''} onClick={this.handleHowLongTemp.bind(this, 'tooday')}>Tooday</button>
        <button className={this.state.howLongTemp === 'fiveDays' ? 'is-active' : ''} onClick={this.handleHowLongTemp.bind(this, 'fiveDays')}>Five days</button>
      </div>
    );
  }

}

export default ChooseHowLongTemp;