import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Router } from 'react-router'
import history from '@app/shared/utils/history'

import Home from '@app/pages/home'
import About from '@app/pages/about'
import Insta from '@app/pages/insta'
import Contact from '@app/pages/contact'
import Waitlist from '@app/pages/waitlist'
import routes from '@app/shared/constants/routes'

function App () {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={routes.HOME} component={Home} />
        <Route exact path={routes.ABOUT} component={About} />
        <Route exact path={routes.INSTA} component={Insta} />
        <Route exact path={routes.CONTACT} component={Contact} />
        <Route exact path={routes.WAITLIST} component={Waitlist} />
      </Switch>
    </Router>
  )
}

export default App
