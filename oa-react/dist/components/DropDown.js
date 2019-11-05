function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const DropDown = props => {
  const [isOpen, setIsOpen] = useState(props.isOpen ? true : false);
  let wrapperRef = useRef(null);

  const handleClickOutside = evt => {
    if (wrapperRef && !wrapperRef.current.contains(evt.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // if (!props.noPop) {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside); // }
  }, []);
  const title = React.createElement(React.Fragment, null, props.title, props.icon ? props.icon : React.createElement("i", {
    className: "dropdown-arrow fas fa-angle-down"
  }));
  return React.createElement("div", {
    className: 'dropdown-wrapper ' + (props.className ? props.className : '')
  }, React.createElement("div", {
    className: "virtual-dropdown"
  }, title), React.createElement("div", _extends({}, props, {
    className: 'dropdown ' + (isOpen ? 'list-open' : ''),
    ref: wrapperRef,
    onClick: evt => {
      // if (props.noPop) {
      //   return
      // }
      setIsOpen(!isOpen);
    }
  }), React.createElement("div", {
    className: 'dropdown-title ' + (isOpen ? 'pressed' : ''),
    onClick: evt => {
      // if (!props.noPop) {
      //   return
      // }
      setIsOpen(!isOpen);
    }
  }, title), props.children && React.createElement("div", {
    className: 'dropdown-list ' + (isOpen ? '' : 'hide-list'),
    onClick: evt => {
      props.onClick && props.onClick(evt);
    }
  }, props.children)));
};

DropDown.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};
export default DropDown;