import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SingleArticle from './components/SingleArticle';
import Freelancing from './components/Freelancing';
import Remote from './components/Remote';
import Crypto from './components/Crypto';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home />}/>
          <Route path='/article' element= {<SingleArticle />}/>
          <Route path='/freelancing' element= {<Freelancing />}/>
          <Route path='/remote' element= {<Remote />}/>
          <Route path='/crypto' element= {<Crypto />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;