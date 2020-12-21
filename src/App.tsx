import React, { FC } from 'react'
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom'

import { Welcome } from './pages'
import { Header } from './components'

const routes = [
  { path: '/welcome', isExact: true, component: Welcome },
]

const App : FC = () => (
  <Router>
    <Header />
    <Switch>
      {routes.map(({ isExact, component, path }) => <Route exact={isExact} path={path} component={component} />)}
      <Redirect to="/welcome" />
    </Switch>
  </Router>
)

export default App
