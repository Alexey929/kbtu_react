import React, { FC } from 'react'
import {
  BrowserRouter as Router, Switch, Route, Redirect, useLocation,
} from 'react-router-dom'

import {
  Welcome, Registration, Login, Publications, Publication, Profile, WriteStory,
} from './pages'
import { Header } from './components'

const routes = [
  { path: '/welcome', isExact: true, component: Welcome },
  { path: '/registration', isExact: true, component: Registration },
  { path: '/login', isExact: true, component: Login },
  { path: '/publications', isExact: true, component: Publications },
  { path: '/profile', isExact: true, component: Profile },
  { path: '/publication/:id', isExact: true, component: Publication },
  { path: '/write-story', isExact: true, component: WriteStory },

]

const routesWithoutHeader = ['/login', '/registration', '/welcome']

const Routers: FC = () => {
  const { pathname } = useLocation()

  return (
    <>
      {!routesWithoutHeader.includes(pathname) && <Header />}
      <Switch>
        {routes.map(({ isExact, component, path }) => (
          <Route exact={isExact} path={path} component={component} key={path} />
        ))}
        <Redirect to="/welcome" />
      </Switch>
    </>
  )
}

const App: FC = () => (
  <Router>
    <Routers />
  </Router>
)

export default App
