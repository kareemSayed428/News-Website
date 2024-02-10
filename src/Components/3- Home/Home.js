import React, { useEffect, useRef, useState } from 'react';
//import { Link } from "react-router-dom";
import './styleHome.css';
import newspaper_img from './image/newspaper.jpg';
import ad_img from './image/ad-space.png';
// Initialization for ES Users
import { Ripple, initMDB } from "mdb-ui-kit";
import HeadHome from '../2-headHome/HeadHome';
import { Link } from 'react-router-dom';
import SlidShow from '../Slid Show/SlidShow';
import EntertainmentSection from './Entertainment Section/EntertainmentSection';
import SportSection from './Sport Section/SportSection';
import TrendingNow from './Trending Now/TrendingNow';
import HealthSection from './Health Seaction/HealthSection';
import BusinessSection from './Business Section/BusinessSection';
import LatestNews from './Latest News/LatestNews';
import { techData } from '../TechData';
import { latestNewsData } from '../LatestNewsData';
// import techData from './../TechData';
import intro_img from './image/intro.png';
initMDB({ Ripple });



function Home() {
    const apiKey = 'd2b27050f51b434b80dec292733e13b9';


    /*
        Technology Categoty
    */
        const [showData, setShowData] = useState([]);
        //console.log(showData);
    
        //To Next Post
        const [firstNum, setFirstNum] = useState(0);
        const [secoundNum, setSecoundNum] = useState(1);
        //console.log(firstNum);
    
        const url = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=d2b27050f51b434b80dec292733e13b9';
        useEffect(()=>{
    
            fetch(url)
            .then(res => res.json())
            .then(data => setShowData(data.articles));
        }, []);
    




    






    /*
        SlidShow
    */
    const mainDiv = useRef();
   

    useEffect(()=>{

        const slidShowNews = setInterval(() => {
                
                mainDiv.current.scrollLeft += 100;
                mainDiv.current.style.scrollBehavior = 'smooth';
                //console.log(mainDiv.current.scrollLeft);
                
    
                if(mainDiv.current.scrollLeft >= 5100) {
                    mainDiv.current.scrollLeft = 0;   // scrollLeft is change (in the first scrollLeft = 0 and the end scrollLeft = 400 so reset it to 0)
                    
                }
    
                //console.log('work');
    
            }, 2000);
        

        //slidShowNews();

        //To CleanUp - when move to another page the slidShowNews will stop
        return ()=> {
            clearInterval(slidShowNews);
        };
        

  }, [])
    



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

    

        /*
            intro image
        */
       const [showIntro, setShowIntro] = useState(true);


    

    /* 
        Test Section
    */
//    const [showProduct, setShowProduct] = useState([]);
//    console.log(showProduct);

//    const productUrl = 'https://fakestoreapi.com/products';

//    useEffect(()=>{
//     const product = async function(){
//         const apiProduct = await fetch(productUrl);
//         const dataProduct = await apiProduct.json();

//         setShowProduct(dataProduct);
//     };

//             product()
//    }, []);
    

    return(
        <>
            <div className='intro-image' style={showIntro === false ? {display:'none'} : null}>
                <div className='text'>
                    <h3>We recommend viewing it on a large screen - it is not complete on small screens like mobile phones.<i onClick={()=>{setShowIntro(false)}} className="fa-solid fa-rectangle-xmark"></i></h3>
                </div>
                <img src={intro_img}></img>
                
                    <span></span>
            </div>

             <HeadHome></HeadHome>

             <TrendingNow></TrendingNow>

            {/* Start Tecnology Section */}
            <div className='Technology-title-section container mt-5'>
                
                <div className='d-flex'>
                    <h6 className='bg-danger text-white position-relative'>Technology News <span className='bg-danger position-absolute'></span></h6>
                    <Link to='TechnologyPage' className='mt-2'>See..All</Link>
                </div>
            </div>

            
            <div className='Technology-News d-flex container'>
                    <div className='All-posts d-block'>
                            <div className='tech-section'>
                                    <div className='main-post'>
                                    {
                                        techData.map((e)=>{
                                            return(
                                                
                                                <div className="card mb-3" key={Math.random()}>
                                                    <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                                                        <img src={e.urlToImage ? e.urlToImage : newspaper_img} className="img-fluid"/>
                                                        <a>
                                                        <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
                                                        </a>
                                                    </div>
                                                <div className="card-body position-relative">
                                                    <h5 className="card-title">{e.title}</h5>
                                                    <p className='mt-3' style={{color: '#64748b'}}><i className="fa-solid fa-calendar-days text-danger me-2"></i>{e.publishedAt}</p>

                                                    {/* Some of Description not inclouded word so i use if */}
                                                    <p className="card-text">{(e.description) ? (e.description).slice(0, 180) + '....' : 'No Description For This Post'}</p>
                                                    <a href={e.url} target='_blank' className="btn btn-danger position-absolute" data-mdb-ripple-init>Read More</a>
                                                    <div className='next-btn position-absolute'>
                                                        <i onClick={()=>{

                                                            //setFirstNum(firstNum -1);

                                                            firstNum > 0 ? setFirstNum(firstNum -1) : setFirstNum(19);

                                                            secoundNum > 1 ? setSecoundNum(secoundNum -1) : setSecoundNum(20);

                                                            //setSecoundNum(secoundNum -1);

                                                        }} className="privise fa-solid fa-circle-arrow-right mt-5 text-danger" style={{rotate: '180deg', cursor: 'pointer'}}></i>
                                                        <i onClick={()=>{

                                                            //setFirstNum(firstNum +1);


                                                            firstNum <= 18 ? setFirstNum(firstNum +1) : setFirstNum(0);


                                                            secoundNum <= 19 ? setSecoundNum(secoundNum +1) : setSecoundNum(1);


                                                            //setSecoundNum(secoundNum +1);

                                                        }} className="next fa-solid fa-circle-arrow-right mt-5 ms-4 text-danger" style={{cursor: 'pointer'}}></i>
                                                    </div>
                                                </div>
                                            </div>
                                                
                                            );
                                        })
                                        .slice(firstNum, secoundNum)
                                    }

                                        
                                    </div>

                                    <div className='small-post'>
                                    {
                                        techData.map((e)=>{
                                            return(
                                                
                                            <div className="card mb-3" key={Math.random()}>
                                                <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                                                    <img src={e.urlToImage ? e.urlToImage : newspaper_img} className="img-fluid"/>
                                                    <a href={e.url} target='_blank'>
                                                    <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
                                                    </a>
                                                </div>
                                                <div className="card-body position-relative">
                                                    <h6 className="card-title">{e.title}</h6>
                                                    <p className='mt-3' style={{color: '#64748b', fontSize: '12px'}}><i className="fa-solid fa-calendar-days text-danger me-2"></i>{e.publishedAt}</p>
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
            {/* End Tecnology Section */}




                            {/* Start Business Section */}
                            
                                <BusinessSection></BusinessSection>

                            {/* End Business Section */}




                            {/* Start Health Section */}

                            <HealthSection></HealthSection>

                            {/* End Health Section */}





                            {/* Start Sport Section */}

                            <SportSection></SportSection>

                            {/* Start Sport Section */}







                            {/* Start Entertainment Section */}

                            <EntertainmentSection></EntertainmentSection>

                            {/* End Entertainment Section */}



                            {/* Start ad Section */}
                            <div className='ad-space ms-3' style={{marginTop: '35px', position: 'relative'}}>
                                <h2 style={{position: 'absolute', left: '50%', top: '50%', marginTop: '35px'}}>Ad Space</h2>
                                <img src={ad_img}></img>
                            </div>
                            {/* End ad Section */}

                            
                    </div>


                    {/* Start latest-news */}

                    <LatestNews></LatestNews>

                    {/* End latest-news */}



                    
            </div>


                                


                                    

                        
                        {/* Start SlidShow */}

                <div className='test-slid mt-5'>
                    <div ref={mainDiv} className='my-card' style={{width: '1000px', overflowX: 'scroll', display: 'flex', margin: 'auto'}}>
                    
                        {
                            latestNewsData.map((e)=>{
                                return(
                                    <div className='my-img' key={Math.random()}>
                                        <div>
                                            <a href={e.url} target='_blank'>
                                            <img src={e.urlToImage ? e.urlToImage : newspaper_img} style={{width: '300px', marginLeft: '5px', cursor: 'pointer', height: '200px'}}/>
                                            </a>
                                        </div>
                                        <div className='body ms-4 mt-4'>
                                                <h6 className="card-title">{e.title}</h6>
                                                <p className='mt-3' style={{color: '#64748b', fontSize: '12px'}}><i className="fa-solid fa-calendar-days text-secondary me-2"></i>{e.publishedAt}</p>
                                        </div>
                                    </div> 
                                );
                            })
                        }

                     </div>
                </div>


                        {/* End SlidShow */}


            
            

            

            




            {/* 
                Test
            */}
            {/* {
                showProduct.map((el)=>{
                    return(
                        <>
                            <div key={el.id}>
                                <p>Title Is: {el.title} <Link to={`ReadMore/${el.id}`}>Details</Link></p>
                                <img src={el.image}></img>
                            </div>
                        </>
                    )
                })
                .slice(0, 2)
            } */}
                            


            
        </>
    );
};


export default Home;