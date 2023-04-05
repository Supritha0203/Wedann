import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <h2 className="navbar-brand" >Navbar</h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <Link className="btn btn-primary active d-flex" to='/'>Home</Link>
      <Link className="btn btn-primary active d-flex" to='/about'>About</Link>
      <Link className="btn btn-primary active d-flex" to='/creatememory'>Create Memory</Link>      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
