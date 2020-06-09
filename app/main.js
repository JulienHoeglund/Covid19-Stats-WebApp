import '@riotjs/hot-reload'
import {component} from 'riot'
import Home from './home.riot'

component(Home)(document.getElementById('app'), {
  title: 'Covid-19'
})
