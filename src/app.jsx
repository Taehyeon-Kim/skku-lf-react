import React from 'react';
import './app.css';
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import Section from './components/section/section'
import Footer from './components/footer/footer'
import Login from './components/login/login'
import Main from './components/main/main'

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Navbar />
        <Main />
      </div>
      
      {/* <Login /> */}
      
      {/* <div className="wrapper">
        <Navbar />
        <Section />
      </div>
      <Footer /> */}
    </>
  );
}

export default App;