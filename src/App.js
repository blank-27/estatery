import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

// import pages
import Home from './pages/Home';

const App = () => {
  return (
    <div className='w-full mx-auto bg-white'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;