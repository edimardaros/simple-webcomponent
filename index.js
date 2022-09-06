class MyComp extends HTMLElement {

  constructor() {
    super()

    this.shadow = this.attachShadow({mode: 'open'})
  }

  connectedCallback() {
    const template = `
      <style>
        :host {
          background: #333333;
          display: block;
          width: 100vw;
          height: 100vh;
          color: #ffffff;
        }
      </style>

      <h1>Hello World</h1>
      <p><slot></slot></p>
    `

    this.shadow.innerHTML = template
  }


}

customElements.define('my-custom-element', MyComp)