import React from 'react'

const AppButton = (props) => {
  const {
    label = 'Button',
    onClick = () => { },
    onMouseEnter = () => { },
    onMouseLeave = () => { },
    secondary = false,
    disabled = false,
    className = '',
    style = {},
    size = 'small',
    ...rest
  } = props

  let finalClassName = 'app-button--primary'
  if (secondary) {
    finalClassName = 'app-button--secondary'
  }

  if (size === 'small') {
    finalClassName = `${finalClassName} app-button--small`
  } else if (size === 'large') {
    finalClassName = `${finalClassName} app-button--large`
  }
  return (
    <button
      className={`app-button ${finalClassName} ${className}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      disabled={disabled}
      onMouseLeave={onMouseLeave}
      style={style}
      {...rest}
    >
      {label}
    </button>
  )
}

export default AppButton