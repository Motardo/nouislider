# nouislider
A react controlled component wrapper for nouislider

## Usage
```js
import React, { Component } from 'react';
import NoUiSlider from '@motardo/nouislider';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSliderUpdate = this.handleSliderUpdate.bind(this);
    this.state = { sliderValues: [200, 800] };
  }

  handleSliderUpdate(values) {
    this.setState({ sliderValues: values });
  }

  render() {
    return (
      <div className="App">
        <NoUiSlider
          values={this.state.sliderValues}
          onUpdate={this.handleSliderUpdate}
          options={{
            start: [200, 800],
            range: {
              min: 0,
              max: 1000,
            },
            step: 25,
          }}
        />
      </div>
    );
  }
}

export default App;
```

## Demo
To run the demo app
```sh
npm install @motardo/nouislider
cd $(npm bin)/demo
npm start
```
