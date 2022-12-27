import React from 'react'

const AppCheckbox = (props) => {
  const { values = [], value, onChange } = props
  return (
    <div className="app-checkbox">
      <i className='app-checkbox--checkmark' />
      <input
        type='checkbox'
        value={value}
        defaultChecked={values.includes(value)}
        onChange={onChange}
      />
    </div>
  )
}

export default AppCheckbox