import React from 'react'
import {connect} from 'react-redux'
import Rainbow from 'rainbowvis.js'

class Start extends React.Component {
  constructor(props) {
    super(props)
    let {cx, cy, r} = props
    var rainbow = new Rainbow();
    rainbow.setNumberRange(0, 1000);
    rainbow.setSpectrum('ADA7C9', 'A0C1D1');
    this.state = {
      cx,
      cy,
      r,
      rainbow
    }
  }
  render() {
    let {cx, cy, r, rainbow} = this.state

    return (
      <g>
        <circle style={{fill: rainbow.colourAt(Math.floor(Math.random() * 1000))}}cx={cx} cy={cy} r={r}/>
      </g>
    )
  }
}

export default connect()(Start)
