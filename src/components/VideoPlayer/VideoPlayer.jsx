import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { getVideoId } from '../../utils/hooks'

const VideoPlayer = (props) => {
  const { data, playerRef, ...rest } = props;
  const [videoId, setVideoId] = useState('')

  console.log('data', data)

  useEffect(() => {
    setVideoId(getVideoId(data.TrailerURL))
  }, [data]);

  return (
    <div className='app-video-player' {...rest} ref={playerRef}>
      <iframe
        className='video--player'
        src={`https://www.youtube.com/embed/${videoId}`}
        id="player"
        frameBorder="0"
        allowFullScreen="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="BADASS RAVIKUMAR | Title Announcement Teaser | Himesh Reshammiya | The Xposé Universe"
        width="100%"
        height="100%"
        data-gtm-yt-inspected-18="true"
      ></iframe>
      <div className="video--details">
        <div className='info'>
          <div className='name'>
            {data?.EventTitle}
          </div>
          <div className='language'>
            <span>
              {data?.EventLanguage}
            </span>
          </div>
          <div className='genre'>
            {data.EventGenre.split('|').map((genre, index) => (
              <span key={index}>
                {genre}
              </span>
            ))}
          </div>
        </div>
        <div className='stats'>
          <div className='thumbs-up'>
            <i className='fas fa-thumbs-up'></i>
            <div className='content'>
              <span>{`${data.avgRating}%`}</span>
              <span>{data.dwtsCount} Vote</span>
            </div>
          </div>
          <div className='date'>
            <i className='fas fa-calendar'></i>
            <div className='content'>
              <span>{moment(data.DispReleaseDate).format('MMM DD')}</span>
              <span>{moment(data.DispReleaseDate).format('YYYY')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer