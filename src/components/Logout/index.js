import {Component} from 'react'
import './index.css'

class Logout extends Component {
  state = {logout: true}

  onLogout = () => {
    this.setState(prevState => ({logout: !prevState.logout}))
  }

  render() {
    const {logout} = this.state
    return (
      <button className="btn" type="button" onClick={this.onLogout}>
        Logout
      </button>
    )
  }
}

export default Logout
