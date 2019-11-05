import React, { useState, useRef, useEffect } from 'react';
import logo from './logo.svg';
import { CubeMenu, Carousel, Button, FilterGroup, Card, DropDown } from './exports';
import './_App.scss';

function Cards() {
  return React.createElement(Card, null, React.createElement(Card, {
    className: "ss"
  }, React.createElement(Card, null, React.createElement(Card, {
    onClick: () => console.log('second')
  }, React.createElement(Card, null, React.createElement(Button, {
    onClick: () => console.log('bttn')
  }, "btn"))))));
}

function DrawingLine({
  line
}) {
  const pathData = 'M ' + line.map(p => p.x + ' ' + p.y).join(' L ');
  return React.createElement("path", {
    d: pathData
  });
}

function Drawing({
  lines
}) {
  return lines.length > 0 && React.createElement("svg", {
    className: "svg-lines"
  }, lines.map((line, index) => React.createElement(DrawingLine, {
    key: index,
    line: line
  })));
}

function Test(props) {
  const [pressed, setPressed] = useState(false);
  return React.createElement("button", {
    className: pressed ? 'btn-a' : 'btn-b',
    onClick: () => setPressed(!pressed)
  }, "test");
}

function lineLen(line) {
  return Math.sqrt((line[0].x - line[1].x) * (line[0].x - line[1].x) + (line[0].y - line[1].y) * (line[0].y - line[1].y));
}

function App() {
  const [ls, setLines] = useState([]);
  const ref = useRef(null);
  const [target, setTarget] = useState(false);
  const children = document.querySelector('#root').children; // console.log('App', children)

  useEffect(() => {
    console.log(ref.current.childNodes, 'ffff');
  }, []);
  return React.createElement("div", {
    ref: ref,
    className: "App",
    style: {
      display: 'flex'
    },
    onClick: e => {
      if (target && target.click) {
        console.log(target);
        console.log(ref.current.childNodes);
        target.click();
      }
    },
    onMouseMove: e => {
      const lines = ['dd'];
      let len = 1000000;
      ref.current.childNodes.forEach(elem => {
        const rect = elem.getBoundingClientRect();
        const ldist = [{
          x: e.pageX,
          y: e.pageY
        }, {
          x: rect.x + rect.width / 2,
          y: rect.y + rect.height / 2
        }];
        const ldraw = [{
          x: e.clientX,
          y: e.clientY
        }, {
          x: rect.x + rect.width / 2,
          y: rect.y + rect.height / 2
        }];
        const newLen = lineLen(ldist);

        if (newLen < len) {
          len = newLen;
          lines[0] = ldraw;
          setTarget(elem);
        } // lines.push([
        //   {x: e.pageX, y: e.pageY},
        //   {x: rect.x + rect.width / 2, y: rect.y + rect.height / 2},
        // ])

      });
      setLines(lines);
    }
  }, React.createElement(Drawing, {
    lines: ls
  }), React.createElement(Test, null), React.createElement(DropDown, {
    title: "DropDown",
    onClick: e => console.log(e.target)
  }, React.createElement("div", null, "aaa"), React.createElement("div", null, "aaa"), React.createElement("div", null, "aaa")), React.createElement(Test, null), React.createElement(Button, {
    onClick: () => console.log('ssss'),
    test: "aa",
    className: "sss",
    style: {
      width: '100%'
    }
  }, "btn"), React.createElement(Button, {
    type: 'toggle',
    onClick: e => console.log(e.isToggleOn),
    disabled: true
  }, "disabled"), React.createElement(Button, {
    type: 'toggle',
    onClick: e => console.log(e.isToggleOn)
  }, "toggle"), React.createElement("button", null, "normllal"), React.createElement(Card, null, React.createElement("button", null, "normal")), React.createElement(Cards, null), React.createElement(FilterGroup, {
    single: true,
    filters: [{
      name: 'Yes...',
      disabled: false
    }, {
      name: 'we',
      disabled: true
    }, 'are..', // enabled by default
    {
      name: 'Filters!',
      pushed: true
    }, 'Click MEEE!!!!!!'] // defaultIndex/={0}
    ,
    onFilterUpdate: e => console.log(e)
  }), React.createElement(FilterGroup, {
    onFilterUpdate: e => console.log(e),
    className: "oa-secret",
    filters: ['中文', '字体', {
      name: '也',
      pushed: true
    }, {
      name: '还行',
      pushed: true
    }, '吧'] // defaultIndex={0}

  }), React.createElement(Button, {
    className: "oa-secret"
  }, "\u6D4B\u8BD5"), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt diam felis, sed tempor est pellentesque vel. Mauris tempus convallis. \u4E2D\u6587lorem \u8FD9\u662F\u4E00\u6BB5\u6D4B\u8BD5\u6587\u5B57, \u95E8\u524D\u5927\u6865\u4E0B\u6E38\u8FC7\u4E00\u7FA4\u9E2D, \u5FEB\u6765\u5FEB\u6765\u6570\u4E00\u6570, \u4E8C\u56DB\u516D\u4E03\u516B"), React.createElement("input", {
    className: "oa-input",
    type: "text",
    placeholder: "\u6C5F\u5357\u76AE\u9769\u5382\u5012\u95ED\u4E86"
  }), React.createElement(Carousel, {
    style: {
      height: '200px',
      width: '550px'
    }
  }, React.createElement("input", {
    type: "text",
    placeholder: "\u4E5F\u53EF\u4EE5\u8FD9\u6837"
  }), React.createElement(Button, {
    onClick: e => console.log(e.target.nextSibling)
  }, "Btn2"), React.createElement(Card, null, React.createElement(Card, null, React.createElement(Card, null))), React.createElement(DropDown, {
    title: "\u6253\u5F00\u770B\u770B",
    onClick: e => console.log(e.target)
  }, React.createElement("div", null, "A"), React.createElement("div", null, "b"), React.createElement("div", null, "c"))), React.createElement(Carousel, {
    className: "oa-secret"
  }, React.createElement("h1", null, "dd")), React.createElement(CubeMenu, {
    u: "sdsg",
    l: React.createElement(Card, null, React.createElement(Card, null))
  }));
}

export default App;