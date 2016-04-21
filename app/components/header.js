import React, {Component} from 'react'
import {Link} from 'react-router'

class Header extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div style={styles.container}>
        <Link to='/' style={styles.logo}>PokéDeck</Link>
      </div>
    )
  }
}


const styles = {
  container: {
    backgroundColor: '#6ECCB9',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '15px'
  },
  logo: {
    color: '#D6FFF7',
    fontSize: '25px'
  }
}

export default Header
