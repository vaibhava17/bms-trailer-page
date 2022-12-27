import React, { useState } from 'react'
import AppMenu from '../AppMenu/AppMenu';

const AppDropdown = (props) => {
  const {
    options = [],
    onChange = () => { },
    placeholder = 'Select',
    className = '',
    menuClassName = '',
    disabled = false,
    checkbox = false,
    size = 'small'
  } = props;
  const [isOpen, setIsOpen] = useState(false)
  const [values, setValues] = useState([])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  let finalClassName = 'app-dropdown'

  if (size === 'small') {
    finalClassName = `${finalClassName} app-dropdown--small`
  } else if (size === 'large') {
    finalClassName = `${finalClassName} app-dropdown--large`
  }
  return (
    <div className={`${finalClassName} ${className}`}>
      <button
        className='app-dropdown--header'
        onMouseEnter={toggleDropdown}
        onMouseDown={toggleDropdown}
        disabled={disabled}
      >
        <div className='app-dropdown--text'>
        <span>
          {values.length > 0 ? values.join() : placeholder}
        </span>
        </div>
        <i className='fas fa-chevron-down' />
      </button>
      <div className={`app-dropdown--body ${isOpen ? "app-dropdown--body--active" : ""}`}>
        <AppMenu
          className={menuClassName}
          size={size}
          options={options}
          onClick={(e, option) => {
            if (values.includes(option.label)) {
              setValues(values.filter(value => value !== option.label))
            } else {
              setValues([...values, option.label])
            }
            onChange(e, option)
          }}
          checkbox={checkbox}
        />
      </div>
    </div>
  )
}

export default AppDropdown