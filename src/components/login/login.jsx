import React, { Component } from 'react';
import './login.css'
import './input.css'

class Login extends Component {
  render() {
    return (
      <>
        <div id="section">

          <div className="main_banner_area">
            <img src="/images/main-banner.png" alt="성균SW교육원" className="main_banner img"/>
          </div>

          <div className="login_area">
            <div className="container">
              <div className="form-item">
                <input type="text" id="example" placeholder="&nbsp;"/>
                <label htmlFor="example" data-label="학과"></label>
              </div>
              <p> ex) 소프트웨어학과 </p>
            </div>

            <div className="container">
              <div className="form-item">
                <input type="text" id="example" placeholder="&nbsp;"/>
                <label htmlFor="example" data-label="학번"></label>
              </div>
              <p> ex) 2020123123 </p>
            </div>

            <div className="container">
              <div className="form-item">
                <input type="text" id="example" placeholder="&nbsp;"/>
                <label htmlFor="example" data-label="이름"></label>
              </div>
              <p> ex) 홍길동 </p>
            </div>

            <div className="container">
              <div className="form-item">
                <input type="text" id="example" placeholder="&nbsp;"/>
                <label htmlFor="example" data-label="방명록"></label>
              </div>
              <p> ex) 간단한 소감을 남겨주세요 </p>
            </div>
          </div>

        </div>

        <div className="login_button_area">
          <button onClick="location.href='#'">이동하기</button>
        </div>
      </>
    );
  }
}

export default Login;