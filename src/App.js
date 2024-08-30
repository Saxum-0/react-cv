import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Blog from './pages/blog';
import Portfolio from './pages/portfolio';
import Services from './pages/services';
import Contact from './pages/contact';
import Mentions from './pages/mentions';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {
  return (
      <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions" element={<Mentions />} />
        </Routes>
      </>
  );
};

export default App;
