import './index.css'
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {login: false, logout: true}

  onLogin = () => {
    this.setState(prevState => ({login: !prevState.login}))
  }

  onLogout = () => {
    this.setState(prevState => ({logout: !prevState.logout}))
  }

  render() {
    const {login, logout} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <Message />
          {login ? <Logout /> : <Login />}
        </div>
      </div>
    )
  }
}

export default Home
