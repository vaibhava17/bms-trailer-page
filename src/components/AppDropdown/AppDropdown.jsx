import React, { useState } from 'react'
import AppMenu from '../AppMenu/AppMenu';

const AppDropdown = (props) => {
  const {
    options = [],
    value = '',
    onChange = () => { },
    placeholder = 'Select',
    className = '',
    menuClassName = '',
    disabled = false,
    checkbox = true,
    size = 'small'
  } = props;
  const [isOpen, setIsOpen] = useState(false)

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
        {value || placeholder}
        <i className='fas fa-chevron-down' />
      </button>
      <div className={`app-dropdown--body ${isOpen ? "app-dropdown--body--active" : ""}`}>
        <AppMenu
          className={menuClassName}
          size={size}
          options={options}
          onClick={onChange}
          checkbox={checkbox}
        />
      </div>
    </div>
  )
}

export default AppDropdown