import React from 'react'
import { Link } from 'react-router-dom';
import './Main.scss'

const Main = () => {
  return (
    <div className="main">
      <div className="main__wrapper">
        <div className="main__wrapper--content">
          <h1 className="heading">Need the playlists transfer ?</h1>
          <h2 className="heading">Let's do it!</h2>

          <p className="text">
            We help you to transfer your playlist from your one online music
            service to another in an easy manner. You don't need to worry about
            doing it manually we will do it for you automatically and faster.
          </p>
          <Link className='btn'to="/connect">Get Started</Link>
        </div>
      </div>
    </div>
  );
}

export default Main