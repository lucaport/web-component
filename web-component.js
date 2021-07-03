/**
 * web-component.js - Web Component with Custom Element
 * @author Lucas Portella Ornelas Santos <lucaport@msn.com>
 */

/**
 * WebComponent
 * @property {string}             styles    Element CSS styles
 * @property {function}           template  Element HTML content
 * @property {object}             state     Element state
 */

export default class WebComponent extends HTMLElement {
  constructor() {
    super()
    this.state = {}
    this.attachShadow({ mode: 'open' })

    this.addEventListener('render', this.afterRender.bind(this))
  }

  render() {
    let styles = ''
    let template = ''

    if (this.styles) {
      styles = `<style>${this.styles}</style>`
    }

    if (this.template) {
      template = this.template()
    }

    this.shadowRoot.innerHTML = styles + template

    this.dispatchEvent(new Event('render'))
  }

  afterRender() { }

  connectedCallback() {
    this.render()
  }
}
