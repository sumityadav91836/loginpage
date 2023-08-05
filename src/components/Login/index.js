import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {login: false}

  onLogin = () => {
    this.setState(prevState => ({login: !prevState.login}))
  }

  render() {
    const {login} = this.state
    return (
      <button className="btn" type="button" onClick={this.onLogin}>
        Login
      </button>
    )
  }
}

export default Login
