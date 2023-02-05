import { BaseModule } from "./base_module";
export const module = app => new BaseModule({
  container: app,
  data: { count: -1 },
  events: {
    'click .b1': function () { this.data.count += 1; this.update() },
    'click .b2': function () { this.data.count -= 1; this.update() },
    'click .b3': function () { this.data.count *= 2; this.update() },
    'click .b4': function () { this.data.count *= 3; this.update() },
  },
  template: `
    <div class="module1">
      <h1>模块1</h1>
      <div>{{count}}</div>
      <div><button class="b1">+1</button></div>
      <div><button class="b2">-1</button></div>
      <div><button class="b3">*2</button></div>
      <div><button class="b4">*3</button></div>
    </div>
    }
  `
})
