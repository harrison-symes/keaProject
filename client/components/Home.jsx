import React from 'react'
import {Link} from 'react-router-dom'

export default function(props) {
  return (
    <div className="home">
      <Link to={'/canvas'}>Canvas</Link>
    </div>
  )
}
