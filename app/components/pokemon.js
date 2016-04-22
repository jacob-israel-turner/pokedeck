import React, {Component} from 'react'

class Pokemon extends Component {
  constructor() {
    super()
    this.state = {}
  }
  toggleEdit(e) {
    e.preventDefault()
    const wasEditing = this.state.isEditing
    let pokemon
    if (wasEditing) {
      this.props.editPokemon(this.props.params.id, {nickname: this.state.nickname, species: this.state.species, gender: this.state.gender, pic: this.state.pic})
      pokemon = {}
    } else {
      pokemon = this.props.pokemon[this.props.params.id]
    }
    this.setState({ isEditing: !this.state.isEditing, ...pokemon })
  }
  handleChange(field, e) {
    this.setState({[field]: e.target.value})
  }
  render() {
    const pokemon = this.props.pokemon[this.props.params.id]
    let bio
    if (!this.state.isEditing) {
      bio = (<div style={styles.infoContainer}>
              <h2>{pokemon.nickname}</h2>
              <div>{pokemon.gender} {pokemon.species}</div>
            </div>)
    } else {
      bio = (<div style={styles.infoContainer}>
        <input type='text' onChange={this.handleChange.bind(this, 'nickname')} value={this.state.nickname} />
        <br />
        <input type='text' onChange={this.handleChange.bind(this, 'gender')} value={this.state.gender} />
        <input type='text' onChange={this.handleChange.bind(this, 'species')} value={this.state.species} />
      </div>)
    }
    return (
      <div style={styles.container}>
        <div style={styles.innerContainer}>
          <img style={styles.pic} src={pokemon.pic} />
          {bio}
        </div>
        <div style={styles.editContainer}>
          <a href='#' onClick={this.toggleEdit.bind(this)}>{this.state.isEditing ? 'Save' : 'Edit'}</a>
        </div>
      </div>
    )
  }
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
    justifyContent: 'space-between',
    flexGrow: 1
  },
  innerContainer: {
    display: 'flex',
  },
  infoContainer: {
    marginLeft: '10px'
  },
  editContainer: {
    alignItems: 'top'
  }
}

export default Pokemon
