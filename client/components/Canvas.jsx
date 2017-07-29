import React from 'react'
import {connect} from 'react-redux'
import Start from './Start'

class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
      children: []
    }
  }
  spawnNewStart(e) {
    let {clientX, clientY} = e
    let newChild = {cx: clientX, cy: clientY, r: 100}
    let children = this.state.children
    children.push(newChild)
    this.setState({children})
  }
  renderChildren() {
    return this.state.children.map(({cx, cy, r}, i) => <Start key={i} cx={cx} cy={cy} r={r} />)
  }
  render() {
    let {height, width} = this.state
    return (
      <svg height={height * 0.9} width={width} onClick={(e) => this.spawnNewStart(e)}>
        {this.renderChildren()}
      </svg>
    )
  }
}


export default connect()(Canvas)
