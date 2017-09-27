import React from 'react';
import PropTypes from 'prop-types';
import nouislider from 'nouislider';
import '../node_modules/nouislider/distribute/nouislider.css';

function Slider(props) {
  return (
    <div ref={props.slider} />
  );
}

class NoUiSlider extends React.Component {
  constructor(props) {
    super(props);
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

  componentWillUnmount() {
    this.sliderElement.noUiSlider.destoy();
  }

  handleUpdate(newValues) {
    this.props.onUpdate(newValues);
  }

  render() {
    // eslint-disable-next-line no-return-assign
    return <Slider slider={el => this.sliderElement = el} />;
  }
}

export default NoUiSlider;

NoUiSlider.propTypes = {
  values: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  options: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  onUpdate: PropTypes.func.isRequired,
};

Slider.propTypes = {
  slider: PropTypes.func.isRequired,
};
