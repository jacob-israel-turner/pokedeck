import React, {Component} from 'react'
import { Link } from 'react-router'

const PokemonPreview = (props) => {
  return (
    <div style={styles.container}>
      <img style={styles.pic} src={props.pic} />
      <div style={styles.infoContainer}>
        <Link to={`/pokemon/${props.id}`}><h2>{props.nickname}</h2></Link>
        <div>{props.gender} {props.species}</div>
      </div>
    </div>
  )
}

const styles = {
  pic: {
    width: 'auto',
    height: '150px'
  },
  container: {
    border: '1px solid black',
    margin: '20px 50px',
    padding: '15px',
    display: 'flex',
    flexGrow: 1
  },
  infoContainer: {
    marginLeft: '10px'
  }
}

export default PokemonPreview
