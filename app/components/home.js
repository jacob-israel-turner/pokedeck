import React, {Component} from 'react'
import {connect} from 'react-redux'
import {PokemonPreview} from './index'

const Home = props => (
  <div style={styles.container}>
    {props.pokemon.map((data, index) => <PokemonPreview id={index} key={data.nickname+data.species} {...data} />)}
  </div>
)

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}

export default connect((state) => ({pokemon: state.pokemon}))(Home)
