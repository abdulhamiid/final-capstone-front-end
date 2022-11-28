import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/home';
import MakeReservation from './pages/makeReserve';
import MyReservation from './pages/myReserve';
import AddReservation from './pages/addReserve';
import DeleteReservation from './pages/deleteReserve';
// import Navigation from './components/navigation';
// import Home from './components/Home/Home';
import './App.css';
import './styles/App.css';
import DetailsPage from './components/DetailsPage/DetailsPage';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/makereserve" element={<MakeReservation />} />
          <Route path="/myreserve" element={<MyReservation />} />
          <Route path="/addreserve" element={<AddReservation />} />
          <Route path="/deletereserve" element={<DeleteReservation />} />
        </Routes>
      </Router>
      <DetailsPage />
    </div>
  );
}

export default App;
