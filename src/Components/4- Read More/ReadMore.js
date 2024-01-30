import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import news_img from '../3- Home/image/newspaper.jpg'
import { Ripple, initMDB } from "mdb-ui-kit";
import './StyleReadMore.css';
initMDB({ Ripple });


function ReadMore() {
    const mainDiv = useRef(null);

    const divTrending = useRef();
    const btnOne = useRef(null);

    // const params = useParams();
    // console.log(params);


    // const url = `https://fakestoreapi.com/products`;
    // const [showReadMore, setShowReadMore] = useState([]);
    // console.log(showReadMore);

    // useEffect(()=>{
    //     fetch(`${url}/${params.id}`)
    //     .then(res => res.json())
    //     .then(data => setShowReadMore(data))

    // }, []);

    
    //console.log(mainDiv.current.scrollLeft);

    const slidShowNews = function() {

        setInterval(() => {
            
            mainDiv.current.scrollLeft += 100;
            mainDiv.current.style.scrollBehavior = 'smooth';
            

            if(mainDiv.current.scrollLeft >= 400) {
                mainDiv.current.scrollLeft = 0;   // scrollLeft is change (in the first scrollLeft = 0 and the end scrollLeft = 400 so reset it to 0)
                
            }
                    

                    // if(mainDiv.current.scrollLeft <= 50) {

                    //         mainDiv.current.scrollLeft += 50;
                    //         mainDiv.current.style.scrollBehavior = 'smooth';
                    //         console.log(mainDiv.current.scrollLeft);

                    // } else if(mainDiv.current.scrollLeft = 400) {

                    //         //mainDiv.current.scrollLeft = 50;

                    //         mainDiv.current.scrollLeft -= 50;
                    //         mainDiv.current.style.scrollBehavior = 'smooth';
                    //         console.log(mainDiv.current.scrollLeft);
                    // }

        }, 2000);
    };


    // trendingNews
    const [trendNews, setTrendNews] = useState([]);
    console.log(trendNews);

    const [firstNumTrend, setFirstNumTrend] = useState(0);
    const [secoundNumTrend, setsecoundtNumTrend] = useState(1);

    const urlTrendingNews = 'https://newsapi.org/v2/top-headlines?country=eg&category=sport&apiKey=d2b27050f51b434b80dec292733e13b9'

    
    

    const trendingNews = function() {
        divTrending.current.style.width = '1000px';
        divTrending.current.style.transition = '10s';
    };

    

    useEffect(()=>{
        
        fetch(urlTrendingNews)
        .then(res => res.json())
        .then(data => setTrendNews(data.articles));

          //slidShowNews();
          //nextNews();

    }, []);


    

    
        // const nextNews = setInterval(() => {

        //         btnOne.current.click();
                    
        //              setFirstNumTrend(firstNumTrend + 1);
        //              setsecoundtNumTrend(secoundNumTrend + 1);
    
    
        //             // setTimeout(() => {
        //             //     divTrending.current.click();
        //             // }, 500);
    
        
        //             console.log('Iam Next first' + firstNumTrend);        // 0
        //             console.log('Iam Next secound' + secoundNumTrend);    // 1
        
        //         }, 3000);

        //nextNews();

        // useEffect(()=>{

        //     const nextNews = setInterval(() => {

        //         //btnOne.current.click();
                    
        //              setFirstNumTrend(firstNumTrend + 1);
        //              setsecoundtNumTrend(secoundNumTrend + 1);
    
    
        //             // setTimeout(() => {
        //             //     divTrending.current.click();
        //             // }, 500);
    
        
        //             console.log('Iam Next first' + firstNumTrend);        // 0
        //             console.log('Iam Next secound' + secoundNumTrend);    // 1
        
        //         }, 3000);

        // }, []);

    

    // useEffect(()=>{

    //     //trendingNews();
    //     //nextNews();

    //     // setTimeout(() => {
    //     //     divTrending.current.click();
    //     //     console.log('Iam Click');
    //     // }, 10000);

    //     // setInterval(() => {
    //     //     setFirstNumTrend(firstNumTrend + 1);
    //     //     setsecoundtNumTrend(secoundNumTrend + 1);

    //     //     console.log('Iam Next first' + firstNumTrend);        // 0
    //     //     console.log('Iam Next secound' + secoundNumTrend);    // 1

    //     // }, 2000);

    // }, []);

    

    

    


    return(
        <>
            
            {/* params.id ===> ${e.id} from Home page in test*/}
            {/* <h1> Read More - Title Is: - {params.id}</h1>    */}

            {/* Not use map because element is an object in this page (there are only one product) */}


            {/* <img src={showReadMore.image}></img>
            <p>Price Is {showReadMore.price}</p> */}



            {/* Start On Trending News */}
            <section className='trending-news mt-2 d-flex justify-content-center align-items-center' style={{paddingTop: '200px'}}>
                <h6 className='bg-dark text-light p-2 text-center' style={{width: '120px', fontSize: '13px'}}>TRENDING NOW</h6>
                <span className="loader"></span>

                {
                    trendNews.map((e)=>{
                        return(
                            <div className='trend-scroll d-flex justify-content-center align-items-center' key={Math.random()} ref={divTrending} style={{width: 'auto', overflowX: 'scroll' ,transition: '10s'}}>
                                
                                <i ref={btnOne} onClick={()=>{

                                        //setFirstNum(firstNum -1);

                                        firstNumTrend > 0 ? setFirstNumTrend(firstNumTrend -1) : setFirstNumTrend(19);

                                        secoundNumTrend > 1 ? setsecoundtNumTrend(secoundNumTrend -1) : setsecoundtNumTrend(20);

                                        //setSecoundNum(secoundNum -1);

                                }} className="privise fa-solid fa-circle-arrow-right text-danger" style={{rotate: '180deg', cursor: 'pointer'}}></i>
                                <h6 className='ms-2 me-2' style={{width: 'auto', marginBottom: '0'}}>{e.title}</h6>

                                <i onClick={()=>{

                                        //setFirstNum(firstNum +1);


                                        firstNumTrend <= 18 ? setFirstNumTrend(firstNumTrend +1) : setFirstNumTrend(0);


                                        secoundNumTrend <= 19 ? setsecoundtNumTrend(secoundNumTrend +1) : setsecoundtNumTrend(1);


                                        //setSecoundNum(secoundNum +1);

                                        }} className="next fa-solid fa-circle-arrow-right text-danger" style={{cursor: 'pointer'}}></i>
                            </div>
                        );
                    })
                    .slice(firstNumTrend, secoundNumTrend)
                }
                
                
            </section>




            {/* Start On SldiShow */}

            <div className='test-slid mt-5'>
                <div ref={mainDiv} className='my-card' style={{width: '800px', overflowX: 'scroll', display: 'flex'}}>
                    
                    <div className='my-img'>
                        <img src={news_img} style={{width: '300px', marginLeft: '5px'}}></img>
                        <div className='body ms-4 mt-4'>
                                <h6 className="card-title">Kareem</h6>
                                <p className='mt-3' style={{color: '#64748b', fontSize: '12px'}}><i className="fa-solid fa-calendar-days text-secondary me-2"></i>20-1-2024</p>
                        </div>
                    </div>

                    <div className='my-img'>
                        <img src={news_img} style={{width: '300px', marginLeft: '5px'}}></img>
                        <h1>Kareem</h1>
                        <div className="">
                            <h6 className="card-title">Kareem</h6>
                            <p className='mt-3' style={{color: '#64748b', fontSize: '12px'}}><i className="fa-solid fa-calendar-days text-secondary me-2"></i>20-1-2024</p>
                        </div>
                    </div>

                    <div className='my-img'>
                        <img src={news_img} style={{width: '300px', marginLeft: '5px'}}></img>
                        <h1>Kareem</h1>
                        <div className="">
                            <h6 className="card-title">Kareem</h6>
                            <p className='mt-3' style={{color: '#64748b', fontSize: '12px'}}><i className="fa-solid fa-calendar-days text-secondary me-2"></i>20-1-2024</p>
                        </div>
                    </div>

                    <div className='my-img'>
                        <img src={news_img} style={{width: '300px', marginLeft: '5px'}}></img>
                        <h1>Kareem</h1>
                        <div className="">
                            <h6 className="card-title">Kareem</h6>
                            <p className='mt-3' style={{color: '#64748b', fontSize: '12px'}}><i className="fa-solid fa-calendar-days text-secondary me-2"></i>20-1-2024</p>
                        </div>
                    </div>
                    
                    

                    
                </div>

                <i onClick={()=>{

                        // mainDiv.current.scrollLeft += 50;
                        // mainDiv.current.style.scrollBehavior = 'smooth';
                        // console.log(mainDiv.current.scrollLeft);

                        slidShowNews();

                }} className="fa-solid fa-circle-right" style={{fontSize: '25px', cursor: 'pointer'}}></i>
            </div>
            <br></br>












            <div className='test2-slid'>
                <div className='my-card' style={{width: '800px', overflowX: 'scroll', display: 'flex'}}>
                    
                        <div className="card mb-3" style={{width: '300px', marginLeft: '10px'}}>
                            <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                                <img src={news_img} className="img-fluid"/>
                                <a href='' target='_blank'>
                                <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
                                </a>
                                <div className="card-body">
                                <h6 className="card-title">Kareem</h6>
                                <p className='mt-3' style={{color: '#64748b', fontSize: '12px'}}><i className="fa-solid fa-calendar-days text-secondary me-2"></i>20-1-2024</p>
                            </div>
                            </div>
                            
                        </div>

                        <div className="card mb-3" style={{width: '300px', marginLeft: '10px'}}>
                            <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                                <img src={news_img} className="img-fluid"/>
                                <a href='' target='_blank'>
                                <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
                                </a>
                            </div>
                            <div className="card-body position-relative">
                                <h6 className="card-title">Kareem</h6>
                                <p className='mt-3' style={{color: '#64748b', fontSize: '12px'}}><i className="fa-solid fa-calendar-days text-secondary me-2"></i>20-1-2024</p>
                            </div>
                        </div>

                        <div className="card mb-3" style={{width: '300px', marginLeft: '10px'}}>
                            <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                                <img src={news_img} className="img-fluid"/>
                                <a href='' target='_blank'>
                                <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
                                </a>
                            </div>
                            <div className="card-body position-relative">
                                <h6 className="card-title">Kareem</h6>
                                <p className='mt-3' style={{color: '#64748b', fontSize: '12px'}}><i className="fa-solid fa-calendar-days text-secondary me-2"></i>20-1-2024</p>
                            </div>
                        </div>
                </div>
            </div>
            
        </>
    );
};


export default ReadMore;