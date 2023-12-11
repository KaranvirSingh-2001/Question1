import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Flowers from './pages/Flowers';
import Trees from './pages/Trees';
import Cars from './pages/Cars';

const App = () => {
 return (
    <Router>
      <div>
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

        <Route path="/" exact component={Home} />
        <Route path="/flowers" component={Flowers} />
        <Route path="/trees" component={Trees} />
        <Route path="/cars" component={Cars} />
      </div>
    </Router>
 );
};

export default App;