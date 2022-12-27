import React from 'react'
import moment from 'moment'
import { DATE_FORMAT } from '../../constants'

const AppCard = (props) => {
  const {
    data,
    onClick,
    ...otherProps
  } = props
  return (
    <div className="app-card" onClick={onClick} {...otherProps}>
      <div className='app-card--image'>
        <img src={data.EventImageUrl} alt={data.EventTitle} className="app-card--image-placeholder" />
        <div className='app-card--overlay'>
          <span>{moment(data.DispReleaseDate).format(DATE_FORMAT)}</span>
          <i className='fas fa-play-circle' />
        </div>
      </div>
      <div className="app-card--content">
        <div className="app-card--title">{data.EventTitle}</div>
        <div className="app-card--subtitle">{data.EventLanguage}</div>
      </div>
    </div>
  )
}

export default AppCard