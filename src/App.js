
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import Founder from './components/Founder/Founder';
import Founder1 from './components/Founder/Founder1';
import Founder2 from './components/Founder/Founder2';
import Mission from './components/OurMission';
import Centres from './components/Mission/Demonstration';
import Incubation from './components/Mission/Incubation';
import Rural from './components/Mission/RuralBuisness';

function App() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
      <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/what-we-do" element={<Whatwedo />} />
        <Route path="/who-we-are" element={<Whoweare />} />
        <Route path="/get-involved" element={<Getinvolved />} />
        <Route path='/CleanWater' element ={<CleanWater />} />
        <Route path='/agriculture' element = {<Agriculture />} />
        <Route path='/solar' element = {<SolarEnergy />} />
        <Route path='/sanititation' element = {<Sanitation />} />
        <Route path='/socialint' element = {<SocialInit />} />
        <Route path='/food' element = {<FoodProcessing />} /> 
        <Route path='/founder' element = {<Founder />} />
        <Route path='/founder1' element = {<Founder1 />} />
        <Route path='/founder2' element = {<Founder2 />} />
        <Route path = "/mission" element = {<Mission />} />
        <Route path = "/demonstration" element = {<Centres />} />
        <Route path='/incubation' element = {<Incubation />} />
        <Route path='/rural' element = {<Rural />} />
      </Routes>
      <About_us />
    </BrowserRouter>
  );
}

export default App;
