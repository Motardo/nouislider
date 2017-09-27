import React, { Component } from 'react';
import NoUiSlider from '@motardo/nouislider';
import './App.css';

const TIME_MIN = 900;
const TIME_MAX = 2100;

// type=text: formatTime(2050) -> '08:30:PM'
// type=time: formatTime(2050) -> '20:30'
function formatTime(time) {
  const hours24 = `00${Math.floor(time / 100)}`.slice(-2);
  const minutes = `00${(time % 100) * 0.6}`.slice(-2);
  const meridiem = hours24 < 12 ? 'AM' : 'PM';
  const hours = hours24 < 13 ? hours24 : hours24 - 12;
  return [hours, minutes, meridiem].join(':');
}

function pipsFilter(value) {
  if (value % 200 === 0) return 1;
  return 0;
}

const pipsFormat = {
  to(value) {
    return formatTime(parseInt(value, 10)).slice(0, -3);
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSliderUpdate = this.handleSliderUpdate.bind(this);
    this.state = { sliderValues: [1200, 1800] };
  }

  handleSliderUpdate(values) {
    this.setState({ sliderValues: values });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Controlled NoUiSlider Demo</h2>
        </div>

        <div className="slider">
          <NoUiSlider
            values={this.state.sliderValues}
            onUpdate={this.handleSliderUpdate}
            options={{
              start: this.state.sliderValues,
              connect: [true, true, true],
              connectClass: ['red', 'green', 'red'],
              range: {
                min: TIME_MIN,
                max: TIME_MAX,
              },
              step: 25,
              format: {
                to(value) { return parseInt(value, 10); },
                from(value) { return value; },
              },
              pips: {
                mode: 'steps',
                filter: pipsFilter,
                format: pipsFormat,
              },
            }}
          />
        </div>
        <p>Raw values: {this.state.sliderValues.toString()}</p>
        <input readOnly value={formatTime(this.state.sliderValues[0])} type="text" />
        <input readOnly value={formatTime(this.state.sliderValues[1])} type="text" />
      </div>
    );
  }
}

export default App;
