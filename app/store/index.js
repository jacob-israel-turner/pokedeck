import { createStore } from 'redux'
import update from 'react-addons-update'

const initialState = {
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



function reducer (state = initialState, action){
  switch (action.type) {
    case 'UPDATE' :
      return update(state, {pokemon: { [action.id]: { $set: action.changes}}})
    default :
      return state
  }
}

export default createStore(reducer)
