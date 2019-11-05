function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from 'react';

function styleCalc(currentIndex, length) {
  let l = [];

  for (let i = 0; i < length; i++) {
    l.push(`translateY(${(i - currentIndex) * 100}%)`);
  }

  return l;
}

const Carousel = props => {
  const [currentIndex, setIndex] = useState(0); // const contents = [0, 1, 2, 3]

  const contents = props.children && (props.children.length ? props.children : [props.children]); // console.log(contents, 'sss', [].push(props.children), props.children)

  const [styleList, setStyleList] = useState(styleCalc(0, contents && contents.length));
  return React.createElement("div", _extends({}, props, {
    className: `oa-carousel ${props.className ? props.className : ''}`
  }), contents && contents.length > 1 && React.createElement("div", {
    className: "carousel-indicators"
  }, contents.map((item, index) => React.createElement("div", {
    className: `carousel-indicator indicator-${index} ${index == currentIndex ? 'current-indi' : ''}`,
    key: `carousel-indicator-${index}`,
    onMouseEnter: evt => {
      const i = evt.target.className.match('indicator-(.* )')[1];
      setIndex(i); // console.log('new i', i)

      const tmp = styleCalc(i, contents.length);
      setStyleList(tmp);
    }
  }))), contents && contents.map((item, index) => React.createElement("div", {
    className: `carousel-item item-${index}`,
    key: `carousel-item-${index}`,
    style: {
      transform: styleList[index]
    }
  }, item)));
};

export default Carousel;