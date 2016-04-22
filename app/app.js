import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import update from 'react-addons-update'

import { Home, Header, Pokemon } from './components'

import './styles/main.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemon: [{
        nickname: 'Nick',
        gender: 'Male',
        species: 'Pikachu',
        pic: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
      }, {
        nickname: 'Billy',
        gender: 'Male',
        species: 'Diglett',
        pic: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png'
      }, {
        nickname: 'Francis',
        gender: 'Female',
        species: 'Venusaur',
        pic: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png'
      }]
    }
  }
  editPokemon (index, changes) {
    this.setState(update(this.state, {pokemon: { [index]: { $set: changes}}}))
  }
  passPropsToRoute(routes) {
    const props = {
      pokemon: this.state.pokemon,
      editPokemon: this.editPokemon
    }
    return routes && React.cloneElement(routes, props)
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
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='pokemon/:id' component={Pokemon} />
    </Route>
  </Router>
)
, document.getElementById('app'))
