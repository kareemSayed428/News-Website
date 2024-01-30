import main_img from './image/party.png';
import sport_img from './image/sport.png';
import health_img from './image/health.png';
import tech_img from './image/tech.png';
import './styleHeadHome.css';
import { Link } from 'react-router-dom';

function HeadHome() {
    return(
        <>
            <div className='head-home d-flex justify-content-center' style={{paddingTop: '100px'}}>

                <div className='first-img'>
                    <h3>Entertainmen News</h3>
                    <Link to='EntertainmentPage'><img src={main_img}></img></Link>
                </div> 
                
                <div className='secound-img'> 
                    <h3>Sports News</h3>
                    <Link to='SportPage'><img src={sport_img}></img></Link>

                    <div className='third_img d-flex'>
                        <h3>Health News</h3>
                        <Link to='HealthPage'><img src={health_img}></img></Link>

                        <div className='fourth_img'>
                        <h3>Technology News</h3>
                        <Link to='TechnologyPage'><img src={tech_img}></img></Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};


export default HeadHome;