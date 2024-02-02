import React, { useEffect, useRef, useState } from 'react';
import './styleTechnology.css';
import newspaper_img from './../3- Home/image/newspaper.jpg';
import { Ripple, initMDB } from "mdb-ui-kit";
import { Link } from 'react-router-dom';
import ReadMore from '../4- Read More/ReadMore';
import { techData } from '../TechData';
import { latestNewsData } from '../LatestNewsData';
initMDB({ Ripple });

function TechnologyPage() {

    // Technology Categoty
    const [showTecPost, setshowTecPost] = useState([]);
    //console.log(showTecPost);

    const [pageSize, setPageSize] = useState(20);

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=${pageSize}&apiKey=d2b27050f51b434b80dec292733e13b9`;


    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setshowTecPost(data.articles));

        
    }, [pageSize]); 


    // Button Load More
    const loadMoreBtn = useRef(null);


    // Latest News
    const [latestNews, setLatestNews] = useState([]);
    //console.log(latestNews);

    const [latestPageSize, setLatestPageSize] = useState(12);

    const urlLatestNews = `https://newsapi.org/v2/top-headlines?country=us&pageSize=${latestPageSize}&apiKey=d2b27050f51b434b80dec292733e13b9`;

    useEffect(()=>{
        fetch(urlLatestNews)
        .then(res => res.json())
        .then(data => setLatestNews(data.articles));

    }, [latestPageSize]);


    return(
        <>
            <div className="main-content" style={{paddingTop: '60px'}}>
                <section className="intro text-white text-center">
                    <h1>Technology News</h1>
                    <p className='w-50 mx-auto mt-5' style={{fontStyle: 'italic'}}>
                        Technology journalism is the activity, or product,
                       of journalists engaged in the preparation of written,
                       visual, audio or multi-media material intended for dissemination
                       through public media, focusing on technology-related subjects
                    </p>
                    <img></img>
                </section>


                <section className='technology-all-post  mt-4 d-flex justify-content-between'>
                    <div className='left-post'>
                        
                        {
                            techData.map((e)=>{
                                return(
                                    <div className="card mb-3" key={Math.random()}>
                                            <div className="row g-0">
                                                    <div className="col-md-4">
                                                        <img
                                                            src={e.urlToImage ? e.urlToImage : newspaper_img}
                                                            alt="Trendy Pants and Shoes"
                                                            className="img-fluid rounded-start"
                                                            style={{height: '100%', objectFit:'cover'}}
                                                        />
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body" style={{width: '500px'}}>
                                                            <h5 className="card-title">{e.title}</h5>
                                                            <p className='mt-3' style={{color: '#64748b'}}><i className="fa-solid fa-calendar-days text-danger me-2"></i>{e.publishedAt}</p>

                                                            <p className="card-text">{e.description}</p>
                                                            <a href={e.url} target='_blank' className='btn btn-danger' data-mdb-ripple-init>Read More</a>


                                                            {/* To open new link(url) depend on title */}
                                                            {/* <Link to={`/ReadMore/${e.title}`} className="btn btn-danger" data-mdb-ripple-init>Read More</Link> */}

                                                            {/* <ReadMore e={e}></ReadMore> */} {/* This make infinity error */}

                                                            {/* <p className="card-text">
                                                            <small className="text-muted">Last updated 3 mins ago</small>
                                                            </p> */}
                                                        </div>
                                                    </div>
                                            </div>
                                    </div>
                                );
                            })
                        }
                        
                    </div>



                    <div className='right-post' style={{width: '350px'}}>

                        <div className='advertisement text-center'>
                                <p className="card-text">
                                <small className="text-muted">- Advertisement -</small>
                                </p>

                                <div className="card bg-dark text-white ms-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/slides/017.webp" className="card-img" alt="Stony Beach"/>
                                        <div className="card-img-overlay" style={{height: '500px'}}>
                                            <h5 className="card-title">For Your Content</h5>
                                            <p className="card-text">Your Advertisement Here</p>
                                        </div>
                                </div>
                        </div>

                        <div className='title-section container mt-3'>
                                {/* Start Head Section */}
                                <div className='d-flex'>
                                    <h6 className='p-2 text-white text-center position-relative' style={{backgroundColor: 'black'}}>Latest News <span className='bg-black position-absolute' style={{height: '2px', width: '15rem', top: '94%'}}></span></h6>
                                </div>
                                {/* Start Card */}
                                <div className='d-flex flex-wrap'>
                                        
                                            
                                                
                                                    
                                        {
                                            latestNewsData.map((e)=>{
                                                return(
                                                    <div className="card mb-3" key={Math.random()} style={{width: '21rem'}}>
                                                        <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                                                            <img src={e.urlToImage ? e.urlToImage : newspaper_img} className="img-fluid" style={{height: '100%', width: '100%', objectFit: 'cover'}}/>
                                                            <a href={e.url} target='_blank'>
                                                            <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
                                                            </a>
                                                        </div>
                                                        <div className="card-body position-relative" style={{height: '250px'}}>
                                                            <h6 className="card-title">{e.title}</h6>
                                                            <p className='mt-3' style={{color: '#64748b', fontSize: '12px'}}><i className="fa-solid fa-calendar-days text-danger me-2"></i>{e.publishedAt}</p>

                                                            {/* Some of Description not inclouded word so i use if */}
                                                            <p className="card-text" style={{fontSize: '14px'}}>{(e.description) ? (e.description).slice(0, 150) + '...' : 'No Description For This Post'}</p>
                                                            {/* <a href="#" className="btn btn-danger position-absolute" style={{top: '80%'}} data-mdb-ripple-init>Read More</a> */}
                                                        </div>
                                                    </div>
                                                );
                                            }).slice(0, 13)
                                            
                                        }         
                                                    
                                              
                                            
                                        
                                </div>

                        </div>
                    </div>
                </section>


                {/* <section ref={loadMoreBtn} className='load-more text-center mt-3'>
                    <a onClick={()=>{

                        setPageSize(40);
                        setLatestPageSize(25);
                        loadMoreBtn.current.style.display = 'none';
                        

                    }} className="btn btn-danger" data-mdb-ripple-init>Load More</a>                            
                </section> */}
            </div>
        </>
    )
};


export default TechnologyPage;