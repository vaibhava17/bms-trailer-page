import React from 'react'

const AppCheckbox = (props) => {
  const { values = [], value } = props
  return (
    <div className="app-checkbox">
      <i className='app-checkbox--checkmark' />
      <input
        type='checkbox'
        value={value}
        checked={values.includes(value)}
      />
    </div>
  )
}

export default AppCheckbox