import {Component} from 'react'
import './index.css'
import Login from '../Login'
import Logout from '../Logout'

class Message extends Component {
  render() {
    const {login, logout} = this.state
    return <h1>{login} ? Welcome, User : Please Login</h1>
  }
}

export default Message
