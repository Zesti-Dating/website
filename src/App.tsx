import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Home from '@app/pages/home'
import About from '@app/pages/about'
import Waitlist from '@app/pages/waitlist'
import routes from '@app/shared/constants/routes'

function App () {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={routes.HOME} component={Home} />
        <Route exact path={routes.ABOUT} component={About} />
        <Route exact path={routes.WAITLIST} component={Waitlist} />
        <Route exact path={routes.INSTALINK} component={() => { 
          window.location.replace('https://www.instagram.com/zestiharvard/'); 
          return null;
        }}/>
      </Switch>
    </HashRouter>
  )
}

export default App
