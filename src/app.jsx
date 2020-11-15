import React from 'react';
import './app.css';
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import Section from './components/section/section'
import Footer from './components/footer/footer'
import Login from './components/login/login'

function App() {
  return (
    <>
      <Header />
        <Login />
      
      {/* <div className="wrapper">
        <Navbar />
        <Section />
      </div>
      <Footer /> */}
    </>
  );
}

export default App;