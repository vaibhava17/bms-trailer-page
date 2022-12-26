import React from 'react'
import AppCheckbox from '../AppCheckbox/AppCheckbox';

const AppMenu = (props) => {
  const {
    options = [],
    size = 'small',
    checkbox = false,
    className = '',
    handleCheckbox = () => { },
    onClick = () => { },
  } = props;

  let finalClassName = 'app-menu'

  if (size === 'small') {
    finalClassName = `${finalClassName} app-menu--small`
  } else if (size === 'large') {
    finalClassName = `${finalClassName} app-menu--large`
  }

  return (
    <ul className={`${finalClassName} ${className}`}>
      {options.map((option, index) => {
        return (
          <li
            key={index}
            onClick={onClick}
            value={option.value}
          >
            {checkbox && <AppCheckbox handleCheckbox={handleCheckbox} />}
            <span>
              {option.label}
            </span>
          </li>
        )
      })}
    </ul>
  )
}

export default AppMenu