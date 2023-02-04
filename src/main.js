import './style.scss'
import { Module as Module1 } from './1.js'
import { Module as Module2 } from './2.js'
import { Module as Module3 } from './3.js'

const app = document.getElementById('app')

new Module1(app)
new Module2(app)
new Module3(app)
