import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const customWelcomeCss = ":host{display:block;background:#333333;color:white;display:block}";

const CustomWelcome$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("h1", null, "Hello World"), h("p", null, h("slot", null))));
  }
  static get style() { return customWelcomeCss; }
}, [1, "custom-welcome"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["custom-welcome"];
  components.forEach(tagName => { switch (tagName) {
    case "custom-welcome":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CustomWelcome$1);
      }
      break;
  } });
}

const CustomWelcome = CustomWelcome$1;
const defineCustomElement = defineCustomElement$1;

export { CustomWelcome, defineCustomElement };
