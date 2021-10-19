import React from 'react';
import {Link} from 'react-router-dom';

const Header=()=>
{
	return(<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <Link className="navbar-brand" to="#">Fixed navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div ClassName="collapse navbar-collapse" id="navbarCollapse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
       
	  <Link className="nav-link" to="/circle">2Dshape</Link>
	  </li>
      
	   <li className="nav-item">
	  <Link className="nav-link" to="/filter">Filtering</Link>
	  </li> 
    <li className="nav-item">
	  <Link className="nav-link" to="/color">Color</Link>
	  </li>
    <li className="nav-item">
	  <Link className="nav-link" to="/zindexrect">Zindex</Link>
	  </li>
    <li className="nav-item">
	  <Link className="nav-link" to="/fourshape">FourShape</Link>
	  </li>
    <li className="nav-item">
	  <Link className="nav-link" to="/circledrag">DragRectCir</Link>
	  </li>
    <li className="nav-item">
	  <Link className="nav-link" to="/animation">Animation</Link>
	  </li>
     
    <li className="nav-item">
	  <Link className="nav-link" to="/companimation">ColoredRect</Link>
	  </li>
     
    {/* <li className="nav-item">
	  <Link className="nav-link" to="/imagerotation">Image1</Link>
	  </li> */}

     
	 
    </ul>
  
    
  </div>
</nav>
);
}


export default Header;