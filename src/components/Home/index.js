import './index.css'
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  render() {
    const {login, logout} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <Message />
          {login} ? <Logout /> : <Login />
        </div>
      </div>
    )
  }
}

export default Home
