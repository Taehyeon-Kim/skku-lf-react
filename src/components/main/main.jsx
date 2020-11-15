import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './main.css'

class Main extends Component {
  render() {
    return (
      <>
        <div className="contents">

          <div className="main_banner_area">
            <img src="/images/main-banner.png" alt="성균SW교육원" className="main_banner img"/>
          </div>
      
          <div className="video_area_wrapper">
            <div className="congrat_video_area">
              <div id="congrat_video_area_title">
                <strong> 축사 동영상 </strong>
              </div>
              <div id="congrat_video_area_subtitle">
                사범대학 김재현님
              </div>
              <ReactPlayer 
                className="react-player" 
                url='https://www.youtube.com/watch?v=7C2z4GqqS5E'
  
              />
            </div>

            <div className="congrat_video_area">
              <div id="congrat_video_area_title">
                <strong> 축사 동영상 </strong>
              </div>
              <div id="congrat_video_area_subtitle">
                외부초청 홍길동님
              </div>
              <ReactPlayer 
                className="react-player" 
                url='https://www.youtube.com/watch?v=7C2z4GqqS5E' 
              />
            </div>
          </div>


        </div>
      </>
    );
  }
}

export default Main;