import { useEffect, useState } from "react";
import newspaper_img from '../image/newspaper.jpg';
import { Link } from "react-router-dom";
import { latestNewsData } from "../../LatestNewsData";

function LatestNews() {
    /*
        General (No Categoty) [Latest News]
    */ 
        const [general, setGeneral] = useState([]);
        //console.log(general);
    
        const generalUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d2b27050f51b434b80dec292733e13b9';
    
        useEffect(()=> {
            const generalNews = async function() {
                const generalApi = await fetch(generalUrl);
                const generalData = await generalApi.json();
    
                setGeneral(generalData.articles);
            };
    
            generalNews();
    
        }, []);
    
        // Next Btn For Latest News
        const [firstNumLatest, setFirstNumLatest] = useState(0);
        const [secoundNumLatest, setsecoundNumLatest] = useState(8);
    return(
        <>
        <div className='latest-news'>
                            <div className='title-section container ms-5' style={{marginTop: '-42px'}}>
                                <div className='d-flex'>
                                    <h6 className='p-2 text-white text-center position-relative' style={{backgroundColor: 'black'}}>Latest News <span className='bg-black position-absolute' style={{height: '2px', width: '15rem', top: '94%'}}></span></h6>
                                </div>
                                
                                    <div className='d-flex flex-wrap'>
                                        {
                                            latestNewsData.map((e)=>{
                                                return(
                                                    <div className="card mb-3" style={{width: '21rem'}} key={Math.random()}>
                                                    <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                                                        <img src={e.urlToImage ? e.urlToImage : newspaper_img} className="img-fluid" style={{height: '100%', width: '100%', objectFit: 'cover'}}/>
                                                        <a href={e.url} target='_blank'>
                                                        <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
                                                        </a>
                                                    </div>
                                                    <div className="card-body position-relative" style={{height: '250px'}}>
                                                        <h6 className="card-title">{e.title}</h6>
                                                        <p className='mt-3' style={{color: '#64748b', fontSize: '12px'}}><i className="fa-solid fa-calendar-days text-dark me-2"></i>{e.publishedAt}</p>
                                                        <p className="card-text" style={{fontSize: '14px'}}>{e.description}</p>
                                                        {/* <a href="#" className="btn btn-danger position-absolute" style={{top: '80%'}} data-mdb-ripple-init>Read More</a> */}
                                                    </div>
                                                </div>
                                                );
                                            })
                                            .slice(firstNumLatest, secoundNumLatest)
                                        } 
                                </div>
                            </div>
                    </div>
        </>
    );
};


export default LatestNews;