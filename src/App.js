import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SidePanel from './Components/MainPanel/SidePanel';
import Dashboard from './Components/MainPanel/Dashboard';
import Rockets from './Components/RocktesPage/Rockets';
import { Provider } from 'react-redux';
import store from './Components/Appstore/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div className='Box-Container'>
            <SidePanel />
            <div component="main" className='main-container'>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/rockets" element={<Rockets />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
