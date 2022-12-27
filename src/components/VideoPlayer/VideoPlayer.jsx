import React from 'react'

const VideoPlayer = () => {
  return (
    <div className='app-video-player'>
      <iframe
        className='video--player'
        src="https://www.youtube.com/embed/2g811Eo7K8U"
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
            Hello Name
          </div>
          <div className='language'>
            <span>
              English
            </span>
          </div>
          <div className='genre'>
            <span>
              Action
            </span>
            <span>
              Triller
            </span>
          </div>
        </div>
        <div className='stats'>
          <div className='thumbs-up'>
            <i className='fas fa-thumbs-up'></i>
            <div className='content'>
              <span>0%</span>
              <span>0 Vote</span>
            </div>
          </div>
          <div className='date'>
            <i className='fas fa-calendar'></i>
            <div className='content'>
              <span>0%</span>
              <span>0 Vote</span>
            </div>
          </div>
        </div>
        <div className='review'>
          <blockquote>
            thel jgvagc  ajsjhavnnm
            thel jgvagc  ajsjhavnnm
            thel jgvagc  ajsjhavnnm
            thel jgvagc  ajsjhavnnm
            thel jgvagc  ajsjhavnnm
            thel jgvagc  ajsjhavnnm
            thel jgvagc  ajsjhavnnm
            thel jgvagc  ajsjhavnnm
          </blockquote>
        </div>
        <div className='cast'>
          <div className='cast--title'>
            Cast
          </div>
          <div className='cast--list'>
            <div className='cast-slider'>
              <div className='cast--item'>
                <img loading='lazy' src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/himesh-reshammiya-820-24-03-2017-12-29-19.jpg" alt='cast' />
                <div className='cast--name'>
                  Himesh Reshammiya
                </div>
              </div>
              <div className='cast--item'>
                <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/himesh-reshammiya-820-24-03-2017-12-29-19.jpg" alt='cast' />
                <div className='cast--name'>
                  Himesh Reshammiya
                </div>
              </div>
              <div className='cast--item'>
                <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/himesh-reshammiya-820-24-03-2017-12-29-19.jpg" alt='cast' />
                <div className='cast--name'>
                  Himesh Reshammiya
                </div>
              </div>
              <div className='cast--item'>
                <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/himesh-reshammiya-820-24-03-2017-12-29-19.jpg" alt='cast' />
                <div className='cast--name'>
                  Himesh Reshammiya
                </div>
              </div>
              <div className='cast--item'>
                <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/himesh-reshammiya-820-24-03-2017-12-29-19.jpg" alt='cast' />
                <div className='cast--name'>
                  Himesh Reshammiya
                </div>
              </div>
              <div className='cast--item'>
                <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/himesh-reshammiya-820-24-03-2017-12-29-19.jpg" alt='cast' />
                <div className='cast--name'>
                  Himesh Reshammiya
                </div>
              </div>
              <div className='cast--item'>
                <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/himesh-reshammiya-820-24-03-2017-12-29-19.jpg" alt='cast' />
                <div className='cast--name'>
                  Himesh Reshammiya
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer