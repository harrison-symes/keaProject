import React from 'react'
import {connect} from 'react-redux'
import Rainbow from 'rainbowvis.js'
import Child from './Child'

class Start extends React.Component {
  constructor(props) {
    super(props)
    let {cx, cy, r} = props
    var rainbow = new Rainbow();
    this.reduceSize = this.reduceSize.bind(this)
    rainbow.setNumberRange(0, 100);
    rainbow.setSpectrum('ADA7C9', 'A0C1D1');
    this.state = {
      cx,
      cy,
      r,
      rainbow,
      i: 0,
      children: []
    }
  }
  reduceSize(newI) {
    this.setState({r: this.state.r - newI})
  }
  addChild() {
    let {cx, cy, r, rainbow, children, i} = this.state
    let newChild = {cx, cy, r, rainbow, i: i + 1}
    children.push(newChild)
    this.setState({children})
  }
  renderChildren() {
    return this.state.children.map(({cx, cy, rainbow, i, r}, key) => <Child key={key} cx={cx} cy={cy} r={r} i={i} rainbow={this.state.rainbow} callback={this.reduceSize}/>)
  }
  componentDidMount() {
    setTimeout(() => this.addChild(), 1000)
  }
  render() {
    let {cx, cy, r, rainbow, i} = this.state

    return (
      <g>
        <circle style={{fill: rainbow.colourAt(i)}}cx={cx} cy={cy} r={r}/>
        {this.renderChildren()}
      </g>
    )
  }
}

export default connect()(Start)
