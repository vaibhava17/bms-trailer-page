import React from 'react'

const AppCard = () => {
  return (
    <div className="app-card">
      <div className='app-card--image'>
        <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." />
        <div className='app-card--overlay'>
          <span>21 Jul</span>
          <i className='fas fa-play-circle' />
        </div>
      </div>
      <div className="app-card--content">
        <div className="app-card--title">Card title</div>
        <div className="app-card--subtitle">English</div>
      </div>
    </div>
  )
}

export default AppCard