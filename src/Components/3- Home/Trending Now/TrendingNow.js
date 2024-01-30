import { useEffect, useState } from "react";
import './styleTrendingNews.css';

function TrendingNow() {
    // trendingNews
    const [trendNews, setTrendNews] = useState([]);
    //console.log(trendNews);

    const [firstNumTrend, setFirstNumTrend] = useState(0);
    const [secoundNumTrend, setsecoundtNumTrend] = useState(1);

    const urlTrendingNews = 'https://newsapi.org/v2/top-headlines?country=eg&category=sport&apiKey=d2b27050f51b434b80dec292733e13b9'
    

    useEffect(()=>{
        
        fetch(urlTrendingNews)
        .then(res => res.json())
        .then(data => setTrendNews(data.articles));


    }, []);
    return(
        <>
            {/* Start On Trending News */}
            <section className='trending-news mt-5'>
                <div className="head">
                    <h6 className='bg-dark text-light p-2'>TRENDING NOW</h6>
                    <span className="loader"></span>
                </div>

                {
                    trendNews.map((e)=>{
                        return(
                            <div className='trend-scroll d-flex justify-content-center align-items-center' key={Math.random()} style={{width: 'auto'}}>
                                
                                <i onClick={()=>{

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


            {/* End Trending News */}
        </>
    );
};


export default TrendingNow;