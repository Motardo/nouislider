import React from 'react';
import nouislider from 'nouislider';
// import '../node_modules/nouislider/distribute/nouislider.css';

function Slider(props) {
  return (
    <div ref={props.slider} />
  );
}

class NoUiSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: this.props.options.start,
    };
  }

  componentDidMount() {
    nouislider.create(this.sliderElement, this.props.options);
    /* nouislider.create(this.sliderElement, {
      start: this.state.values,
      connect: true,
      range: {
        min: 0,
        max: 100,
      },
    }); */
  }

  render() {
    return (
      <div className="bar">
        <Slider slider={el => this.sliderElement = el} />
        <p>{this.state.values.toString()}</p>
      </div>
    );
  }
}

export default NoUiSlider;
