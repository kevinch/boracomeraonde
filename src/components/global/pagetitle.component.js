import React from 'react'

export const PageTitle = (props) => (
  <h1 className="page-title text-center">{props.text}</h1>
)

PageTitle.propTypes  ={
  text: React.PropTypes.string.isRequired
}
