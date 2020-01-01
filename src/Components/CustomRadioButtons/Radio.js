import React, { Component } from "react";
import PropTypes from "prop-types";

class Radio extends Component {
  state = { selected: false };
  toggle = () => {
    const { onChange } = this.props;
    const selected = !this.state.selected;
    if (!this.state.selected) {
      this.setState({ selected });
      onChange(selected, this);
    }
  };

  setSelected = selected => {
    this.setState({ selected });
  };

  render() {
    const {
      state: { selected },
      props: { isDisabled, disableStyle = {} }
    } = this;

    return (
      <div
        aria-checked={selected}
        role="checkbox"
        style={
          isDisabled
            ? { pointerEvents: "none", opacity: ".5", ...disableStyle }
            : {}
        }
        onClick={this.toggle}
      >
        {this.props.render({ isSelected: this.state.selected, isDisabled })}
      </div>
    );
  }
}

Radio.propTypes = {
  render: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  disableStyle: PropTypes.object
};

export default Radio;
