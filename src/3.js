import axios from "axios"
import { BaseModule } from "./base_module";

axios.interceptors.response.use(undefined, (err) => {
  if (err.config?.url === '/xxx') {
    return { data: '模拟数据' + Math.random() }
  }
  throw err
})

export const module = app => new BaseModule({
  container: app,
  data: {
    output: '暂无数据'
  },
  events: {
    'click button': async function () {
      const response = await axios.get('/xxx')
      this.data.output = response.data
      this.update()
    }
  },
  template: `
    <div class="module3">
      <h1>模块3</h1>
      <div><button>点击加载数据</button></div>
      <div>{{output}}</div>
    </div>
  `
})
