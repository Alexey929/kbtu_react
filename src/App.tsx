import React, { FC, Profiler } from 'react'
import {
  BrowserRouter as Router, Switch, Route, Redirect, useLocation,
} from 'react-router-dom'

import {
  Welcome, Registration, Login, Publications, Publication, Profile, WriteStory,
} from './pages'
import { Header } from './components'
import UserModel from './models/UserModel'

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
    < >
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

const App: FC = () => {
  const onRenderCallback = (
    id: any, // the "id" prop of the Profiler tree that has just committed
    phase: any, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration: any, // time spent rendering the committed update
    baseDuration: any, // estimated time to render the entire subtree without memoization
    startTime: any, // when React began rendering this update
    commitTime: any, // when React committed this update
    interactions: any, // the Set of interactions belonging to this update
  ) => {
    const performanceData = [
      `id: ${id}`,
      `phase: ${phase}`,
      `actualDuration: ${actualDuration}`,
      `baseDuration: ${baseDuration}`,
      `startTime: ${startTime}`,
      `commitTime: ${commitTime}`,
      `interactions: ${JSON.stringify([...interactions])}`,
    ].join('\n')
    console.log(performanceData)
  }

  return (
    <Profiler id="Router" onRender={onRenderCallback}>
      <Router>
        <Routers />
      </Router>
    </Profiler>
  )
}

export default App
