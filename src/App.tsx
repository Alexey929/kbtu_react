import React, { FC } from 'react'
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom'

import {
  Welcome, Registration, Login,
} from './pages'

const routes = [
  { path: '/welcome', isExact: true, component: Welcome },
  { path: '/registration', isExact: true, component: Registration },
  { path: '/login', isExact: true, component: Login },
]

const App: FC = () => (
  <Router>
    <Switch>
      {routes.map(({ isExact, component, path }) => (
        <Route exact={isExact} path={path} component={component} key={path} />
      ))}
      <Redirect to="/welcome" />
    </Switch>
  </Router>
)

export default App
