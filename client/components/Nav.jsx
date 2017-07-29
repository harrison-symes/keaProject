import React from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header>
        <table>
          <tr>
            <td><Link to={"/"}>Home</Link></td>
            <td><Link to={"/canvas"}>Canvas</Link></td>
          </tr>
        </table>
      </header>
    )
  }
}
