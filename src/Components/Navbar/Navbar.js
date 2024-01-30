import { Link } from 'react-router-dom';
import './styleNavbar.css';
import { useRef, useState } from 'react';
// Initialization for ES Users

function Navbar() {
    const divOne = useRef(null);

    const [toggle, setToggle] = useState(false);

    return(
        <>
            {/* Start  Advertise And Logo*/}
            {/* <div className='main'>
                <div className='logo'></div>
            </div> */}

            {/* Start Navbar */}
            {/* <div>
                 <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed w-100" style={{zIndex: '3'}}>
                        <div className='one' style={toggle === true ? {height: '400px', marginTop: '-170px', transition: '1s'} : null}>
                            

                                <a className="navbar-brand bg-danger p-2" href="#">News Website</a>

                                <div className="links collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link" to="TechnologyPage">Technology</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link" to="BusinessPage">Business</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link" to='HealthPage'>Health</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link" to='SportPage'>Sports</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link" to='EntertainmentPage'>Entertainment</Link>
                                        </li>
                                    </ul>

                                 </div>

                                 <div className='toggle-menu'>
                                    <i onClick={()=> {

                                        setToggle(!toggle);


                                    }} className="fa-solid fa-bars"></i>

                                 </div>
                        </div>

                        
                    </nav>
                    
            </div> */}
            <div className='tow' style={toggle === true ? {height: '300px', transition: '1s'} : null}>
                    
                    <div className='my-link'>
                        <a className="">News Website</a>

                        <div className="links">
                            <ul className="">
                                <li>
                                <Link to="/">Home</Link>
                                </li>
                                <li>
                                <Link to="TechnologyPage">Technology</Link>
                                </li>
                                <li>
                                <Link to="BusinessPage">Business</Link>
                                </li>
                                <li>
                                <Link to="HealthPage">Health</Link>
                                </li>
                                <li>
                                <Link to="SportPage">Sport</Link>
                                </li>
                                <li>
                                <Link to="EntertainmentPage">Entertainment</Link>
                                </li>
                                
                            </ul>

                        </div>
                    </div>
                    <div className='toggle-menu'>
                        
                                    <i onClick={()=> {

                                        setToggle(!toggle);


                                    }} className="fa-solid fa-bars"></i>
                                    <div className='secound-link'>
                                        <ul style={toggle === false ? {opacity: '0%', transition: '0.5s'} : {opacity: '100%', transition: '1.5s'}}>
                                            <li>
                                            <Link onClick={()=>{setToggle(false)}} to="/">Home</Link>
                                            </li>
                                            <li>
                                            <Link onClick={()=>{setToggle(false)}} to="TechnologyPage">Technology</Link>
                                            </li>
                                            <li>
                                            <Link onClick={()=>{setToggle(false)}} to="BusinessPage">Business</Link>
                                            </li>
                                            <li>
                                            <Link onClick={()=>{setToggle(false)}} to="HealthPage">Health</Link>
                                            </li>
                                            <li>
                                            <Link onClick={()=>{setToggle(false)}} to="SportPage">Sport</Link>
                                            </li>
                                            <li>
                                            <Link onClick={()=>{setToggle(false)}} to="EntertainmentPage">Entertainment</Link>
                                            </li>
                                        </ul>
                                    </div>
                    </div>
            </div>
        </>
    );
};


export default Navbar;