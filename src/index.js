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
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    nouislider.create(this.sliderElement, this.props.options);
    this.sliderElement.noUiSlider.on('update', this.handleUpdate);
  }

  handleUpdate(newValues) {
    this.setState({ values: newValues });
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
