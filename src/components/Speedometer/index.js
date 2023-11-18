import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}
  onIncrement = () =>
    this.setState(prevState => ({count: prevState.count + 10}))
  onDecrement = () =>
    this.setState(prevState => ({count: prevState.count - 10}))
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div>
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            className="img"
            alt="speedometer"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          />
          <h1 className="count"> Speed is {count}mph</h1>
          <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>

          <div className="btn-container">
            <button
              className="button1"
              type="button"
              onClick={this.onIncrement}
            >
              Accelerate
            </button>
            <button
              className="button2"
              type="button"
              onClick={this.onDecrement}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
