import { BaseModule } from "./base_module";
export const module = app => new BaseModule({
  container: app,
  data: {
    name: 'frank'
  },
  events: {
    'input input': function (e) {
      this.data.name = e.target.value;
      this.update()
    }
  },
  template: `
    <div class="module2">
      <h1>模块2</h1>
      <div><span>用户名</span><input value="{{name}}" /></div>
      <div>你输入的是：<span>{{name}}<span></div>
    </div>
  `
})
