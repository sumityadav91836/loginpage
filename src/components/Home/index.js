import './index.css'
import {Component} from 'react'
import Message from './Message'

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="card-container">
          <Message />
        </div>
      </div>
    )
  }
}

export default Home
