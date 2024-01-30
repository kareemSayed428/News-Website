import { useEffect, useState } from "react";
import newspaper_img from '../image/newspaper.jpg';
import { Link } from "react-router-dom";

function SportSection() {
    /* 
        Sport Categoty
    */
        const [showSport, setShowSport] = useState([]);

        //To Next Post
        const [firstNumSport, setFirstNumSport] = useState(0);
        const [secoundNumSport, setSecoundNumSport] = useState(1);
    
        const urlSport = 'https://newsapi.org/v2/top-headlines?country=us&category=sport&apiKey=d2b27050f51b434b80dec292733e13b9';
        useEffect(()=>{
    
            fetch(urlSport)
            .then(res => res.json())
            .then(data => setShowSport(data.articles));
        }, []);
    return(
        <>
        <div className='title-section container mt-5'>
                                        <div className='d-flex'>
                                            <h6 className='bg-warning p-2 text-white text-center position-relative'>Sports News <span className='bg-warning position-absolute' style={{height: '2px', width: '590%', top: '95%'}}></span></h6>
                                            <Link to='SportPage' className='mt-1' style={{marginLeft: '560px'}}>See All</Link>
                                        </div>
                            </div>
                            <div className='Sport-section d-flex'>
                                    
                                    <div className='main-post'>
                                    {
                                        showSport.map((e)=>{
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
                                                    <p className='mt-3' style={{color: '#64748b'}}><i className="fa-solid fa-calendar-days text-warning me-2"></i>{e.publishedAt}</p>

                                                    {/* Some of Description not inclouded word so i use if */}
                                                    <p className="card-text">{(e.description) ? (e.description).slice(0, 180) + '....' : 'No Description For This Post'}</p>
                                                    <a href={e.url} target='_blank' className="btn btn-warning position-absolute" style={{top: '80%', zIndex: '2'}} data-mdb-ripple-init>Read More</a>
                                                    <div className='next-btn position-absolute' style={{top: '80%', marginLeft: '1.5rem'}}>
                                                        <i onClick={()=>{

                                                            //setFirstNum(firstNum -1);

                                                            firstNumSport > 0 ? setFirstNumSport(firstNumSport -1) : setFirstNumSport(19);

                                                            secoundNumSport > 1 ? setSecoundNumSport(secoundNumSport -1) : setSecoundNumSport(20);

                                                            //setSecoundNum(secoundNum -1);

                                                        }} className="privise fa-solid fa-circle-arrow-right mt-5 text-warning" style={{rotate: '180deg', cursor: 'pointer'}}></i>
                                                        <i onClick={()=>{

                                                            //setFirstNum(firstNum +1);


                                                            firstNumSport <= 18 ? setFirstNumSport(firstNumSport +1) : setFirstNumSport(0);


                                                            secoundNumSport <= 19 ? setSecoundNumSport(secoundNumSport +1) : setSecoundNumSport(1);


                                                            //setSecoundNum(secoundNum +1);

                                                        }} className="next fa-solid fa-circle-arrow-right mt-5 ms-4 text-warning" style={{cursor: 'pointer'}}></i>
                                                    </div>
                                                </div>
                                            </div>
                                                
                                            );
                                        })
                                        .slice(firstNumSport, secoundNumSport)
                                    }

                                        
                                    </div>

                                    <div className='small-post'>
                                    {
                                        showSport.map((e)=>{
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
                                                    <p className='mt-3' style={{color: '#64748b', fontSize: '12px'}}><i className="fa-solid fa-calendar-days text-warning me-2"></i>{e.publishedAt}</p>
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


export default SportSection;