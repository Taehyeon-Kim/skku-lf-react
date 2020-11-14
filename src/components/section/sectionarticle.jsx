import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './section.css'
import './sectionarticle.css'

class Sectionarticle extends Component {
  handleClick = () => {
    this.props.onClick(this.props.project);
  }

  handleLike = () => {
    this.props.onLike(this.props.project);
  }

  render() {
    const {pdfURL, title, description, likeCount, groupName, members, isClicked, isLike} = this.props.project;

    return (
      <article>

      {/* 아티클 컨테이너 (비디오 제외) - 컴포넌트로 분리하기 */}
      <div className="article-container"> 

        {/* 프로젝트 이미지 */}
        <img src={pdfURL} alt="project-img" className="project-img"/>
        {/* // 프로젝트 이미지 마무리 */}

        {/* 프로젝트 정보 */}
        <div className="project-info">
          <div className="project-title">{title}</div>
          <div className="project-contents">
            {/* 여기에 프로젝트 설명이 들어가는 부분 <br/>
            여러줄 첨부 가능하도록 <br/><br/>
            넘치면 생략할지 수직으로 스크롤 하게 할지는 <br/>
            결정해야 할 부분! <br/>  */}
            {description}
          </div>
          <div className="project-like">
          {/* <img src="/images/unlike-button.png" alt=""/> */}
            <button className="project-like-button" onClick={this.handleLike}><img src={ isLike ? 
            "/images/like-button.png" : "/images/unlike-button.png"} alt=""/></button>
            
            <span className="project-like-count">{likeCount}</span>
          </div>
        </div>
        {/* // 프로젝트 정보 마무리 */}

        {/* 그룹 정보 */}
        <div className="group-info">

          {/* 그룹 정보 컨테이너 */}
          <div className="group-info-container">
            <div className="groupname-label">팀명</div>
            <div className="groupname">{groupName}</div>
            <div className="groupmember-label">팀원</div>
            <div className="groupmember">
              {members.map(member => (
                <div>{member}</div>
              ))}
            </div>
          </div>

          {/* 동영상 버튼  */}
          <button className="show-video" onClick={this.handleClick}>시연 동영상 보기</button>
        </div>
        {/* // 그룹 정보 마무리 */}

      </div>
      {/* // 아티클 컨테이너 마무리 */}

      <ReactPlayer 
        className="react-player" 
        url='https://www.youtube.com/watch?v=7C2z4GqqS5E' 
        width='100%'
        height='800px'
        style={{ display : (isClicked ? 'block' : 'none') }}
      />

    </article>
    );
  }
}

export default Sectionarticle;

