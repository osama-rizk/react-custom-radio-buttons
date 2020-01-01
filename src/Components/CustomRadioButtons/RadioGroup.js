import React, { Component } from "react";
import PropTypes from "prop-types";

class RadioGroup extends Component {
  options = [];

  onChange = (selected, child) => {
    this.options.forEach(option => {
      if (option && option !== child) {
        option.setSelected(!selected);
      } else {
        this.props.onChange(child.props.value);
      }
    });
  };

  render() {
    let { containerStyle } = this.props;
    let children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        onChange: this.onChange,
        index,
        ref: component => {
          this.options.push(component);
        }
      });
    });
    return <div className={containerStyle}>{children}</div>;
  }
}

RadioGroup.propTypes = {
  containerStyle: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default RadioGroup;
