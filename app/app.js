import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import update from 'react-addons-update'
import { Provider } from 'react-redux'

import { Home, Header, Pokemon } from './components'
import store from './store'

import './styles/main.css'

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  passPropsToRoute(routes) {
    return routes
  }
  render() {
   return (
    <div>
      <Header />
      <div style={styles.routesContainer}>
        {this.passPropsToRoute.call(this, this.props.children)}
      </div>
    </div>
    )
  }
}

const styles = {
  routesContainer: {
    padding: '10px'
  }
}


ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='pokemon/:id' component={Pokemon} />
      </Route>
    </Router>
  </Provider>
)
, document.getElementById('app'))
