import React, { Component } from 'react';
import Sectionheader from './sectionheader';
import Sectionarticle from './sectionarticle';

import './section.css'

class Section extends Component {
  state = {
    projects : [
      { 
        groupNumber: 1,
        title: '아이캠퍼스+', 
        class: '1분반',
        groupName: '브실골플레이어',
        members: ['컴퓨터교육과 강준우', '컴퓨터교육과 김태현', '컴퓨터교육과 김희동', '컴퓨터교육과 송지훈'],
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        pdfURL: 'images/test.jpg',
        likeCount: 48,
        isClicked: false,
        isLike: false,
      },
      { 
        groupNumber: 2,
        title: '러닝페어 아카이빙', 
        class: '2분반',
        groupName: '우리팀레전드',
        members: ['경영학과 홍길동', '경영학과 xxx', '경영학과 ooo', '경영학과 uuu', '경영학과 www'],
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        pdfURL: 'images/test.jpg',
        likeCount: 100,
        isClicked: false,
        isLike: false,
      },
      { 
        groupNumber: 3,
        title: 'CMD 프로젝트', 
        class: '3분반',
        groupName: '집에보내주시조',
        members: ['---', '---', '---', '---'],
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        pdfURL: 'images/test.jpg',
        likeCount: 44,
        isClicked: false,
        isLike: false,
      },
      { 
        groupNumber: 4,
        title: '테스트 프로젝트 4', 
        class: '4분반',
        groupName: '테스트 싫어',
        members: ['김모씨', '이모씨', '박모씨', '강모씨'],
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        pdfURL: 'images/test.jpg',
        likeCount: 44,
        isClicked: false,
        isLike: false,
      },
      { 
        groupNumber: 5,
        title: '총 프로젝트 개수 기능', 
        class: '3분반',
        groupName: '1S3K',
        members: ['김모씨', '이모씨', '박모씨', '강모씨'],
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        pdfURL: 'images/test.jpg',
        likeCount: 44,
        isClicked: false,
        isLike: false,
      },
    ]
  }

  handleClick = project => {
    const projects = [...this.state.projects];
    const index = projects.indexOf(project);

    projects[index].isClicked = !projects[index].isClicked;
  
    this.setState({projects});
  }

  // 좋아요 이벤트
  handleLike = project => {
    const projects = [...this.state.projects];
    const index = projects.indexOf(project);

    projects[index].isLike = !projects[index].isLike; 
    if (projects[index].isLike) {
      projects[index].likeCount++;
    } else {
      projects[index].likeCount--;
    }
  
    this.setState({projects});
  }

  render() {
    return (
      <section>
        <Sectionheader 
          projectCount={this.state.projects.length}
        />
        {this.state.projects.map(project => (
        <Sectionarticle 
          key={project.groupNumber} 
          project={project} 
          onClick = {this.handleClick}
          onLike = {this.handleLike}
        />
        ))}
      </section>
    );
  }
}

export default Section;