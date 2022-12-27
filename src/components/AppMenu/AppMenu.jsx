import React, { useState } from 'react'
import AppCheckbox from '../AppCheckbox/AppCheckbox';

const AppMenu = (props) => {
  const {
    options = [],
    size = 'small',
    checkbox = false,
    className = '',
    onClick = () => { },
    ...rest
  } = props;
  const [checkedValues, setCheckedValues] = useState([])

  let finalClassName = 'app-menu'

  // size
  if (size === 'small') {
    finalClassName = `${finalClassName} app-menu--small`
  } else if (size === 'large') {
    finalClassName = `${finalClassName} app-menu--large`
  }

  return (
    <ul className={`${finalClassName} ${className}`} {...rest}>
      {options.map((option, index) => {
        return (
          <li
            key={index}
            onClick={(e) => {
              onClick(e, option)
              if (checkbox) {
                if (checkedValues.includes(option.value)) {
                  setCheckedValues(checkedValues.filter(value => value !== option.value))
                } else {
                  setCheckedValues([...checkedValues, option.value])
                }
              }
            }}
            value={option.value}
          >
            {checkbox &&
              <AppCheckbox
                values={checkedValues}
                value={option.value}
                onChange={(e) => {
                  if (checkedValues.includes(option.value)) {
                    setCheckedValues(checkedValues.filter(value => value !== option.value))
                  } else {
                    setCheckedValues([...checkedValues, option.value])
                  }
                }}
              />}
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