import React from 'react'
import { Link } from 'react-router-dom';
import './Main.scss'

const Main = () => {
  return (
    <div className="main">
      <div className="main__wrapper">
        <div className="main__wrapper--content">
          <p className="text">
            We help you to transfer your playlist from your one online music
            service to another in an easy manner. You don't need to worry about
            doing it manually we will do it for you automatically and faster.
          </p>
          <button className='btn'><Link to="/connect">Get Started</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Main