import React from 'react';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Blog from './pages/blog';
import Portfolio from './pages/portfolio';
import Services from './pages/services';
import Contact from './pages/contact';
import Mentions from './pages/mentions';

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/mentions" component={Mentions} />
        </Routes>
    </Router>
  );
};

export default App;
