import { createElement } from "./helper"

export class Module {
  data = { count: 1 }
  element = null
  container = null
  constructor(container) {
    this.container = container
    this.element = this.render()
    this.mount()
  }
  render() {
    const element = createElement(`
      <div class="module1">
        <h1>模块1</h1>
        <div>${this.data.count}</div>
        <div><button>+1</button></div>
      </div>
    `)
    this.bindEvents(element)
    return element
  }
  bindEvents(element) {
    element = element || this.element
    const button = element.querySelector('button')
    button.addEventListener('click', () => {
      this.data.count += 1
      this.update()
    })
  }
  mount() {
    this.container.append(this.element)
  }
  update() {
    const newElement = this.render()
    this.element.replaceWith(newElement)
    this.element = newElement
  }
}





