import { Component, Host, h } from '@stencil/core';
export class CustomWelcome {
  render() {
    return (h(Host, null,
      h("h1", null, "Hello World"),
      h("p", null,
        h("slot", null))));
  }
  static get is() { return "custom-welcome"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["custom-welcome.css"]
  }; }
  static get styleUrls() { return {
    "$": ["custom-welcome.css"]
  }; }
}
