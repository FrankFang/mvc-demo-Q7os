import { createElement } from "./helper"

export class Module {
  data = {
    name: 'frank'
  }
  element = null
  container = null
  constructor(container) {
    this.container = container
    this.element = this.render()
    this.mount()
  }
  render() {
    const element = createElement(`
      <div class="module2">
        <h1>模块2</h1>
        <div><span>用户名</span><input value="${this.data.name}" /></div>
        <div>你输入的是：<span>${this.data.name}<span></div>
      </div>
    `)
    this.bindEvents(element)
    return element
  }
  bindEvents(element) {
    const input = element.querySelector('input')
    input.addEventListener('input', (e) => {
      this.data.name = e.target.value
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
    // 有 bug
    // 由于是直接替换了整个元素，所以焦点在旧的 input 元素上，而不是新的 input 元素上
    // 有两种方法解决：
    // 1. 不要全部替换，像 Vue 或者 React 一样，通过 DOM diff 算法，只更新变化的部分
    // 2. 手动重新设置焦点
  }
}



