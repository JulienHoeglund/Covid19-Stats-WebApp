import '@riotjs/hot-reload'
import {component} from 'riot'
import App from './app.riot'

component(App)(document.getElementById('app'), {
  title: 'Covid-19'
  
})
