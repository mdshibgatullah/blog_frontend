import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SingleArticle from './components/common/SingleArticle';
import Freelancing from './components/Freelancing';
import Remote from './components/Remote';
import Crypto from './components/Crypto';
import AiTools from './components/AiTools';
import OnlineIncome from './components/OnlineIncome';
import Dashboard from './components/admin/Dashboard';
import AdminLogin from './components/admin/AdminLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminRequireAuth } from './components/admin/AdminRequireAuth';



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
          <Route path='/ai-tools' element= {<AiTools />}/>
          <Route path='/online-income' element= {<OnlineIncome />}/>

          

          <Route path='/admin/login' element= {<AdminLogin />}/>



          <Route path='/admin/dashboard' element= {
            <AdminRequireAuth>
              <Dashboard />
            </AdminRequireAuth>
          }/>

        </Routes>
      </BrowserRouter>
      <ToastContainer />
      
    </div>
  );
}

export default App;