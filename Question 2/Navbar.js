import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
 return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/flowers">Flowers</Link>
        </li>
        <li>
          <Link to="/trees">Trees</Link>
        </li>
        <li>
          <Link to="/cars">Cars</Link>
        </li>
      </ul>
    </nav>
 );
}

export default Navbar;