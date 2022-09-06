import { r as registerInstance, h, H as Host } from './index-53f597c1.js';

const customWelcomeCss = ":host{display:block;background:#333333;color:white;display:block}";

const CustomWelcome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("h1", null, "Hello World"), h("p", null, h("slot", null))));
  }
};
CustomWelcome.style = customWelcomeCss;

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText());
  }
};
MyComponent.style = myComponentCss;

export { CustomWelcome as custom_welcome, MyComponent as my_component };
