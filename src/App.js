import logo from './logo.svg';
import { Routes, Route, useLocation } from 'react-router-dom';

//import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HeadHome from './Components/2-headHome/HeadHome';
import Home from './Components/3- Home/Home';
import TechnologyPage from './Components/5- Tech Page/TechnologyPage';
import BusinessPage from './Components/6- Business Page/BusinessPage';
import ReadMore from './Components/4- Read More/ReadMore';
import Footer from './Components/Footer/Footer';
import HealthPage from './Components/7- Health Page/HealthPage';
import SportPage from './Components/8- Sport Page/SportPage';
import EntertainmentPage from './Components/9- Entertainment Page/EntertainmentPage';
import { useEffect } from 'react';
import ScrollToTop from './Components/ScrollToTop';



function App() {

  return (
    <div className="App">
      
      <ScrollToTop></ScrollToTop>
        <Navbar/>
        
          <Routes>
            
            <Route path='TechnologyPage' element={<TechnologyPage></TechnologyPage>}></Route>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='BusinessPage' element={<BusinessPage></BusinessPage>}></Route>
            <Route path='HealthPage' element={<HealthPage></HealthPage>}></Route>
            <Route path='SportPage' element={<SportPage></SportPage>}></Route>
            <Route path='EntertainmentPage' element={<EntertainmentPage></EntertainmentPage>}></Route>
            <Route path='ReadMore/:id' element={<ReadMore></ReadMore>}></Route>
          </Routes>
        <Footer></Footer>
        


        
        

        {/* <Routes>
          <Route path='ReadMore/:id' element={<ReadMore></ReadMore>}></Route>
        </Routes> */}

    </div>
  );
}

export default App;