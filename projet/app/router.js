import { Route, Router } from '@riotjs/route'
import { register } from 'riot'

// now the Router and Route components are globally available
register('router', Router)
register('route', Route)