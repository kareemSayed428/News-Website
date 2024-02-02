import { useEffect, useState } from "react";
import newspaper_img from '../image/newspaper.jpg';
import { Link } from "react-router-dom";
import { healthData } from "../../HealthData";

function HealthSection() {
    /* 
        Health Categoty
    */
        const [showHealth, setShowHealth] = useState([]);

        //To Next Post
        const [firstNumHealth, setFirstNumHealth] = useState(0);
        const [secoundNumHealth, setSecoundNumHealth] = useState(1);
    
        const urlHealth = 'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=d2b27050f51b434b80dec292733e13b9';
        useEffect(()=>{
    
            fetch(urlHealth)
            .then(res => res.json())
            .then(data => setShowHealth(data.articles));
        }, []);
    
    return(
        <>
        <div className='title-section container mt-5'>
                                        <div className='d-flex'>
                                            <h6 className='bg-success p-2 text-white text-center position-relative'>Health News <span className='bg-success position-absolute' style={{height: '2px', width: '590%', top: '95%'}}></span></h6>
                                            <Link to='HealthPage' className='mt-1' style={{marginLeft: '560px'}}>See All</Link>
                                        </div>
                            </div>
                            <div className='Health-section d-flex'>
                                    
                                    <div className='main-post'>
                                    {
                                        healthData.map((e)=>{
                                            return(
                                                
                                                <div className="card ms-3 mb-3" style={{width: '400px'}} key={Math.random()}>
                                                <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                                                    <img src={e.urlToImage ? e.urlToImage : newspaper_img} className="img-fluid" style={{height: '200px', width: '100%', objectFit: 'cover'}}/>
                                                    <a>
                                                    <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
                                                    </a>
                                                </div>
                                                <div className="card-body position-relative" style={{height: '400px'}}>
                                                    <h5 className="card-title">{e.title}</h5>
                                                    <p className='mt-3' style={{color: '#64748b'}}><i className="fa-solid fa-calendar-days text-success me-2"></i>{e.publishedAt}</p>

                                                    {/* Some of Description not inclouded word so i use if */}
                                                    <p className="card-text">{(e.description) ? (e.description).slice(0, 180) + '....' : 'No Description For This Post'}</p>
                                                    <a href={e.url} target='_blank' className="btn btn-success position-absolute" style={{top: '80%', zIndex: '2'}} data-mdb-ripple-init>Read More</a>
                                                    <div className='next-btn position-absolute' style={{top: '80%', marginLeft: '1.5rem'}}>
                                                        <i onClick={()=>{

                                                            //setFirstNum(firstNum -1);

                                                            firstNumHealth > 0 ? setFirstNumHealth(firstNumHealth -1) : setFirstNumHealth(19);

                                                            secoundNumHealth > 1 ? setSecoundNumHealth(secoundNumHealth -1) : setSecoundNumHealth(20);

                                                            //setSecoundNum(secoundNum -1);

                                                        }} className="privise fa-solid fa-circle-arrow-right mt-5 text-success" style={{rotate: '180deg', cursor: 'pointer'}}></i>
                                                        <i onClick={()=>{

                                                            //setFirstNum(firstNum +1);


                                                            firstNumHealth <= 18 ? setFirstNumHealth(firstNumHealth +1) : setFirstNumHealth(0);


                                                            secoundNumHealth <= 19 ? setSecoundNumHealth(secoundNumHealth +1) : setSecoundNumHealth(1);


                                                            //setSecoundNum(secoundNum +1);

                                                        }} className="next fa-solid fa-circle-arrow-right mt-5 ms-4 text-success" style={{cursor: 'pointer'}}></i>
                                                    </div>
                                                </div>
                                            </div>
                                                
                                            );
                                        })
                                        .slice(firstNumHealth, secoundNumHealth)
                                    }

                                        
                                    </div>

                                    <div className='small-post'>
                                    {
                                        healthData.map((e)=>{
                                            return(
                                                
                                            <div className="card mb-3" style={{width: '250px', marginLeft: '5rem', display: 'block'}} key={Math.random()}>
                                                <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                                                    <img src={e.urlToImage ? e.urlToImage : newspaper_img} className="img-fluid" style={{height: '100px', width: '100%', objectFit: 'cover'}}/>
                                                    <a href={e.url} target='_blank'>
                                                    <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
                                                    </a>
                                                </div>
                                                <div className="card-body position-relative">
                                                    <h6 className="card-title">{e.title}</h6>
                                                    <p className='mt-3' style={{color: '#64748b', fontSize: '12px'}}><i className="fa-solid fa-calendar-days text-success me-2"></i>{e.publishedAt}</p>
                                                    {/* <p className="card-text">{e.description}</p> */}
                                                    {/* <a href="#" className="btn btn-danger position-absolute" style={{top: '80%'}} data-mdb-ripple-init>Read More</a> */}
                                                </div>
                                            </div>
                                                
                                            );
                                        })
                                        .slice(1, 3)
                                    }
                                    </div>
                            </div>
        </>
    );
};


export default HealthSection;