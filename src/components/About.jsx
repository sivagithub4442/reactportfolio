import React from 'react';
import pic from '../components/mypicbg.png';
import frpic from '../components/mypicf.png';
import './About.css';

function About() {
  return (
    <>
    <div className='main d-flex flex-row '>
        <div className='content'>
        Hi There,
        <h2>I'M <span className='name text-info'>SIVANANDH</span></h2>
        <h2 className='typing-animation'>A ME(A)RN STACK DEVELOPER</h2>
       
        </div>
        <div className='container'>
            <img className='background rounded-4' width={250} src={pic} alt="error" />
            <img className='foreground rounded-5' width={200} src={frpic} alt="error" />

        </div>
    </div>
    </>
  );
}

export default About;
