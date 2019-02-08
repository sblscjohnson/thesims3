import React from 'react';
import Dumb from './../Dumb/Dumb' // nested component
import { withRouter, Link } from 'react-router-dom'

const Nav = () => {
  return(
    <div>
      <h1>YEET</h1>
      <Link to='/dashboard'><button>Home</button></Link>
      <Link to='/post/:postid'><button>New Post</button></Link>
      <Link to='/'><button>Logout</button></Link>
      <Dumb />
    </div>
  )
}

export default Nav;