import React from 'react'
import {connect} from 'react-redux'

class Start extends React.Component {
  constructor(props) {
    super(props)
    let {cx, cy, r} = props
    this.state = {
      cx, cy, r
    }
  }
  render() {
    let {cx, cy, r} = this.state

    return (
      <g>
        <circle cx={cx} cy={cy} r={r}/>
      </g>
    )
  }
}

export default connect()(Start)
