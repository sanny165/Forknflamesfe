import React from 'react';
import {Routes,Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Home from './screens/Home/Home';
import BookTable from './screens/Bookatable/Bookatable';
import Specialevents from './screens/Specialevents/Specialevents';
import ContactUs from './screens/Contactus/Contactus';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<BookTable />} />
            <Route path="/special-events" element={<Specialevents />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
      
    </BrowserRouter>
  );
}

export default App;