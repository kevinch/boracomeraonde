import React from 'react'

export const Description = (props) => (
  <div className="random-description text-center">
    <p>
      <span className="quote-mark">“</span>
      {props.description}
      <span className="quote-mark">”</span>
    </p>
  </div>
  )

Description.propTypes  ={
  description: React.PropTypes.string.isRequired
}
