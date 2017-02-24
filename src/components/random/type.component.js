import React from 'react'

export const Type = (props) => (
  <span className="random-type">
    🤔 é tipo&nbsp;
    <span className="type">
      {props.type}
    </span>
  </span>
)

Type.propTypes  ={
  type: React.PropTypes.string.isRequired
}
