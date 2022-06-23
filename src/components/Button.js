import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { name, func, disabled } = this.props;
    return (
      <button type="button" onClick={ func } disabled={ disabled }>{name}</button>
    );
  }
}

Button.propTypes = {
  func: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

Button.defaultProps = {
  disabled: false,
};
