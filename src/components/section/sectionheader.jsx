import React, { Component } from 'react';
import './section.css'
import './sectionheader.css'

class Sectionheader extends Component {
  state = {
    campus: '인문사회캠퍼스',
    part: '3분반',
    prof: '김재현',
    projectCount: 48,
  }

  render() {
    return (
      <div className="section-header">
        {/* 분반 정보 */}
        <div className="class-name">{this.state.campus} {this.state.part}</div>

        {/* 교수 정보 */}
        <div className="prof-name">{this.state.prof} 교수님</div>

        {/* 프로젝트 개수 정보 */}
        <div className="end-line-container">
          <div className="project-count">총 <strong>{this.state.projectCount}</strong>개의 작품이 등록되었습니다.</div>
        </div>
        
      </div>


    );
  }
}

export default Sectionheader;