import React from 'react'
import axios from 'axios'

const initialState ={
  grid: {"x":1, "y":2 },
  counter: 0,
  message: '',
  email: ''
}

export default class AppClass extends React.Component {

state = initialState

onSubmit = event => {
  event.preventDefault()
  const payload = { "x": this.state.grid.x, "y": this.state.grid.y, "steps": this.state.counter, "email": this.state.email}
  axios.post('http://localhoust:api/result',payload)
  .then (resp => {
    this.setState({...this.state, message: resp.data.message})
    console.log(this.state)
  })
  .catch(err => {
    console.log(err)
  })
}

  render() {

    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates (2, 2)</h3>
          <h3 id="steps">You moved 0 times</h3>
        </div>
        <div id="grid">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square active">B</div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
        <div className="info">
          <h3 id="message"></h3>
        </div>
        <div id="keypad">
          <button id="left">LEFT</button>
          <button id="up">UP</button>
          <button id="right">RIGHT</button>
          <button id="down">DOWN</button>
          <button id="reset">reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
