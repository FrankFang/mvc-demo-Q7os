import axios from "axios"
import { createElement } from "./helper"

export class Module {
  data = {
    output: '暂无数据'
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
      <div class="module3">
        <h1>模块3</h1>
        <div><button id="btn">点击加载数据</button></div>
        <div>${this.data.output}</div>
      </div>
    `)
    this.bindEvents(element)
    return element
  }
  bindEvents(element) {
    const button = element.querySelector('#btn')
    button.addEventListener('click', async () => {
      const response = await axios.get('/xxx')
      this.data.output = response.data
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




axios.interceptors.response.use(undefined, (err) => {
  if (err.config?.url === '/xxx') {
    return { data: '模拟数据' + Math.random() }
  }
  throw err
})
