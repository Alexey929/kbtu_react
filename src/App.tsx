import React, { FC } from 'react'
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom'

import {
  Welcome, Registration, Login, Publications, Profile,
} from './pages'
import { Header } from './components'

const routes = [
  { path: '/welcome', isExact: true, component: Welcome },
  { path: '/registration', isExact: true, component: Registration },
  { path: '/login', isExact: true, component: Login },
  { path: '/publications', isExact: true, component: Publications },
  { path: '/profile', isExact: true, component: Profile },
]

const App: FC = () => (
  <Router>
    <Header />
    <Switch>
      {routes.map(({ isExact, component, path }) => (
        <Route exact={isExact} path={path} component={component} key={path} />
      ))}
      <Redirect to="/welcome" />
    </Switch>
  </Router>
)

export default App
