import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Landing from './modules/landing.module'
import Places from './modules/places.module'
import Add from './modules/add.module'

import './assets/styles/vendor/normalize.min.css'
import './assets/styles/app.css'
import './assets/styles/modules/landing.css'
import './assets/styles/modules/places.css'
import './assets/styles/modules/add.css'
import './assets/styles/components/global/header.css'
import './assets/styles/components/global/nav.css'
import './assets/styles/components/global/logo.css'
import './assets/styles/components/global/arcadebutton.css'
import './assets/styles/components/global/pagetitle.css'
import './assets/styles/components/places/random.css'
import './assets/styles/components/places/list.css'
import './assets/styles/components/places/addform.css'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Landing}/>
    <Route path="/places" component={Places}/>
    <Route path="/add" component={Add}/>
  </Router>
), document.getElementById('app'))
