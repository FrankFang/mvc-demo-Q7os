import { compile } from "handlebars"
import { createElement } from "./helper"
export class BaseModule {
  constructor(options) { // vue - create / react - constructor
    Object.assign(this, options)
    this.element = this.render()
    this.mount()
  }
  render() { // render
    const html = compile(this.template)(this.data)
    const element = createElement(html)
    this.bindEvents(element)
    return element
  }
  bindEvents(element) {
    for (let key in this.events) {
      // key = '事件名 选择器'
      const fn = this.events[key]
      const index = key.indexOf(' ')
      const eventName = key.slice(0, index) // click
      const selector = key.slice(index + 1) // .b1
      // 事件委托：我没有监听 button，而是监听祖先
      // 正确的事件委托
      element.addEventListener(eventName, (e) => {
        if (e.target.matches(selector)) {
          fn.call(this, e)
        }
      })
    }
  }
  mount() { // vue - mount / react - willMount
    this.container.append(this.element)
  }
  update() { // vue - update / react - update
    const newElement = this.render()
    this.element.replaceWith(newElement)
    this.element = newElement
  }
}
