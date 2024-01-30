import { useEffect, useState } from "react";

function TechnologyCategoty() {
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

    return(
        <>
        </>
    );
};



export default TechnologyCategoty;