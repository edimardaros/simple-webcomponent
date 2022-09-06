'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-601ba236.js');

const customWelcomeCss = ":host{display:block;background:#333333;color:white;display:block}";

const CustomWelcome = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("h1", null, "Hello World"), index.h("p", null, index.h("slot", null))));
  }
};
CustomWelcome.style = customWelcomeCss;

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return index.h("div", null, "Hello, World! I'm ", this.getText());
  }
};
MyComponent.style = myComponentCss;

exports.custom_welcome = CustomWelcome;
exports.my_component = MyComponent;
