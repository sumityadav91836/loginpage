import {Component} from 'react'
import './index.css'

class Login extends Component {
  render() {
    return (
      <button className="btn" type="button" onClick={this.onLogin}>
        Login
      </button>
    )
  }
}

export default Login
