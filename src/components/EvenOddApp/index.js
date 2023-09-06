// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const getRandomNum = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + getRandomNum}))
  }

  render() {
    const {count} = this.state
    const renderText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <h1 className="main-heading">Count {count}</h1>
        <p className="description">Count is {renderText}</p>
        <button
          className="incrementBtn"
          onClick={this.onIncrement}
          type="button"
        >
          Increment
        </button>
        <p className="star">Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
