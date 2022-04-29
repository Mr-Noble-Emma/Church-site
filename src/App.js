import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Component/pages/Home';
import About from './Component/pages/About';
import Contact from './Component/pages/Contact';
import Events from './Component/pages/Events';
import Navbar from './Component/Navbar/Navbar';
import Blog from './Component/pages/Blog';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Foot from './Component/pages/inc/foot';

function App() {
  return (
     
    <Router>
    <div className="body">
      < Navbar/>
        <div className="bliss">
            <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/about">
                <About />
            </Route>

            <Route path="/contact">
                <Contact />
            </Route>

            <Route path="/events">
                <Events />
            </Route>

            <Route path="/blog">
                <Blog />
            </Route>
            </Switch>
            <Foot />
       </div>
      </div>
      </Router>
  );
}

export default App;
