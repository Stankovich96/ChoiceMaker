import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Notfound from '../image/Notfound.png'

class NoMatch extends Component {
  render() {
    
    return (
      <div className="App" >
      <header className="App-header">
        Choice Maker
      </header>
      <h1>Page not Found</h1>
      <div className="App-body" >
       <img src={Notfound} alt="404 image" className="not-found-image"/>
      </div>
      <Link to="/">
      <input type="button" value="Back to Home" className="nomatch-button" />
      </Link>
    </div>
    )
  }
}

export default NoMatch;
