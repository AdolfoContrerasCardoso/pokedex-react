import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Listado from './pages/Listado';

function App() {
  return (
    <div className="p-3 mb-2 bg-dark">
      <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Listado/>}/>
          </Routes>
        </div>
      </Router>
      </div>
    </div>
  );
}

export default App;
