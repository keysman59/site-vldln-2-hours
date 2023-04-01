import { model } from './model'
import { Site } from './classes/site'
import { Sitebar } from './classes/sidebar'
import './styles/main.css'

const site = new Site('#site')
console.log(site)

site.render(model)

const sidebar = new Sidebar('#panel')