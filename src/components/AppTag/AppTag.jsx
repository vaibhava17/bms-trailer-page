import React from 'react'

const AppTag = (props) => {
  const { label = "Tag", onClick } = props
  return (
    <div className="app-tag" onClick={() => onClick(label)}>
      <div className="app-tag--content">
        <span className="app-tag--title">{label}</span>
        <i className="fas fa-times app-tag--close" />
      </div>
    </div>
  )
}

export default AppTag