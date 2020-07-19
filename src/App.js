import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Profie from './components/Profile';
import Profile from './components/Profile';



function App() {
  return (
    <div className="App">

    <Header/>
    <Home/>
    <About/>
    <Contact/>
    <Profile/>
    <Footer/>
       
    </div>
  );
}

export default App;
