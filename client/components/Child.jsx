import React from 'react'

export default class Child extends React.Component {
  constructor(props) {
    super(props)
    let {cx, cy, r, i, rainbow, callback} = props
    this.state = {
      cx, cy, r, i, rainbow, callback
    }
  }

  render() {
    let {cx, cy, r, rainbow, i} = this.state

    return (
      <g>
        <circle style={{fill: rainbow.colourAt(i)}} cx={cx} cy={cy} r={r}/>
      </g>
    )
  }
}
