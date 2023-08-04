import {Component} from 'react'
import './index.css'

class Logout extends Component {
  render() {
    return (
      <button className="btn" type="button" onClick={this.onLogout}>
        Logout
      </button>
    )
  }
}

export default Logout
