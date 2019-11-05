function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
export const Card = props => {
  return React.createElement("div", _extends({}, props, {
    className: 'oa-card ' + (props.className ? props.className : '')
  }), props.children);
};

const Button = props => {
  const [pressed, setPressed] = useState(false);
  return React.createElement("button", _extends({}, props, {
    // onMouseDown={evt => {
    //   if (props.type === 'toggle') {
    //     props.onClick && props.onClick({...evt, isToggleOn: !pressed})
    //     setPressed(!pressed)
    //   } else {
    //     props.onClick && props.onClick(evt)
    //   }
    // }}
    onClick: evt => {
      if (props.type === 'toggle') {
        props.onClick && props.onClick({ ...evt,
          isToggleOn: !pressed
        });
        setPressed(!pressed);
      } else {
        props.onClick && props.onClick(evt);
      }
    },
    className: `oa-btn ${props.type === 'toggle' ? pressed ? 'oa-toggle oa-toggle-on' : 'oa-toggle oa-toggle-off' : ''} ${props.className ? props.className : ''}`
  }), props.children);
};

Button.propTypes = {
  type: PropTypes.string
};
Button.defaultProps = {
  type: 'button'
};
export default Button;