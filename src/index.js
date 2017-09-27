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
    /* this.state = {
      values: this.props.options.start,
    }; */
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    nouislider.create(this.sliderElement, this.props.options);
    this.sliderElement.noUiSlider.on('update', this.handleUpdate);
  }

  componentWillReceiveProps(nextProps) {
    if ((this.sliderElement || {}).noUiSlider) {
      const current = this.sliderElement.noUiSlider.get();
      const update = Array(current.length).fill(null);
      current.forEach((value, index) => {
        if (value !== nextProps.values[index]) update[index] = nextProps.values[index];
      });
      if (update.some(el => el !== null)) {
        this.sliderElement.noUiSlider.set(update);
      }
    }
  }

  handleUpdate(newValues) {
    this.props.onUpdate(newValues);
  }

  render() {
    return (
      <div className="bar">
        <Slider slider={el => this.sliderElement = el} />
        <p>{this.props.values.toString()}</p>
      </div>
    );
  }
}

export default NoUiSlider;
