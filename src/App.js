import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";
import Header from './components/Header';
import Whatwedo from './components/Whatwedo';
import Whoweare from './components/Whoweare';
import Getinvolved from './components/Getinvolved';
import './App.css';
import Home from './components/Home';
import Main from './components/Main';
import CleanWater from './components/Our Domain/CleanWater';
import Agriculture from './components/Our Domain/Agriculture';
import SolarEnergy from './components/Our Domain/Solarenergy';
import Sanitation from './components/Our Domain/Sanitation';
import SocialInit from './components/Our Domain/Socialinitiatives';
import FoodProcessing from './components/Our Domain/Foodprocessing';
import About_us from './components/About_us';
import Mission from './components/OurMission';
import Centres from './components/Mission/Demonstration';
import Incubation from './components/Mission/Incubation';
import Rural from './components/Mission/RuralBuisness';
import Whatsapp from './components/Whatsapp';
import Donate from './components/Donate';
import Partner from './components/Partner';
import Volunter from './components/Volunter';
import Membership from './components/Membership';
import SharePage from './components/SharePage';  // Import SharePage

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/" element={<Home />} />
        <Route path="/what-we-do" element={<Whatwedo />} />
        <Route path="/who-we-are" element={<Whoweare />} />
        <Route path="/get-involved" element={<Getinvolved />} />
        <Route path='/CleanWater' element={<CleanWater />} />
        <Route path='/agriculture' element={<Agriculture />} />
        <Route path='/solar' element={<SolarEnergy />} />
        <Route path='/sanititation' element={<Sanitation />} />
        <Route path='/socialint' element={<SocialInit />} />
        <Route path='/food' element={<FoodProcessing />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/demonstration" element={<Centres />} />
        <Route path='/incubation' element={<Incubation />} />
        <Route path='/rural' element={<Rural />} />
        <Route path='/whatsapp' element={<Whatsapp />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/partner' element={<Partner />} />
        <Route path='/volunter' element={<Volunter />} />
        <Route path='/membership' element={<Membership />} />
        <Route path='/share' element={<SharePage />} />  {/* New route for SharePage */}
      </Routes>
      <About_us />
    </BrowserRouter>
  );
}

export default App;
