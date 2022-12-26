import React from 'react'

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
            className={checkbox ? 'app-checkbox' : 'app-menu--item'}
          >
            {checkbox && <>
              <i className='app-checkbox--checkmark' />
              <input type='checkbox' onChange={handleCheckbox} value={option.value} />
            </>
            }
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