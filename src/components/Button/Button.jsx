import React from 'react'
import './button.scss'
import PropTypes from 'prop-types'

const Button = ({ ButtonClassName, text, onClick }) => (
  <button className={ButtonClassName ? `button ${ButtonClassName}` : 'button'} onClick={onClick} type="button">
    {text}
  </button>
)

Button.propTypes = {
  ButtonClassName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
