import React from 'react'
import data from './data.json'
import _ from 'lodash'
import Keyborad from './Keyboard'

export default class Youtube extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      display: [],
      link: ''
    }

    _.bindAll(this, 'handleDelete', 'handleKeypad')
  }

  handleDelete() {
    if (this.state.display.length == 1) {
      let arr = this.state.display
      arr.pop()
      this.setState({
        display: arr,
        link: ''
      })
    } else if (this.state.display.length != 0) {
      let arr = this.state.display
      arr.pop()
      this.setState({
        display: arr,
        link:
          'https://www.youtube.com/watch?v=' +
          data[this.state.display.join('') - 1].video_id
      })
    }
  }

  handleKeypad(num) {
    if (this.state.display.length < 3) {
      let arr = this.state.display
      arr.push(num)
      this.setState({
        display: arr,
        link:
          'https://www.youtube.com/watch?v=' +
          data[this.state.display.join('') - 1].video_id
      })
      this.forceUpdate()
    }
  }

  render() {
    return (
      <div className="appWrapper">
        <Keyborad handleNum={this.handleKeypad} handleDel={this.handleDelete} />
        <div className="app">
          <div className="display">
            <div className="displayValue">{this.state.display.join('')}</div>
            <a
              className={this.state.link ? 'link' : 'link disabled'}
              href={this.state.link}
              target="_blank"
            >
              Watch
            </a>
          </div>

          <div className="keypad">
            <div className="key" onClick={() => this.handleKeypad('1')}>
              1
            </div>
            <div className="key" onClick={() => this.handleKeypad('2')}>
              2
            </div>
            <div className="key" onClick={() => this.handleKeypad('3')}>
              3
            </div>
            <div className="key" onClick={() => this.handleKeypad('4')}>
              4
            </div>
            <div className="key" onClick={() => this.handleKeypad('5')}>
              5
            </div>
            <div className="key" onClick={() => this.handleKeypad('6')}>
              6
            </div>
            <div className="key" onClick={() => this.handleKeypad('7')}>
              7
            </div>
            <div className="key" onClick={() => this.handleKeypad('8')}>
              8
            </div>
            <div className="key" onClick={() => this.handleKeypad('9')}>
              9
            </div>
            <div className="key zero" onClick={() => this.handleKeypad('0')}>
              0
            </div>
            <div className="key" onClick={this.handleDelete}>
              X
            </div>
          </div>
        </div>
      </div>
    )
  }
}
