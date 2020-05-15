import React from "react"

function NavBar(){

    return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Smukat 015</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <span className="nav-item nav-link nav-btn" href="#">Home <span className="sr-only">(current)</span></span>
    </div>
  </div>
</nav>
    )

}

export default NavBar;