import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";


const News = ({category}) => {

    const [articles,setArticles]=useState([]);
    useEffect(()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(Response=>Response.json()).then(data=> setArticles(data.articles))
    },[category])
  return (
    <div className="news-box" style={{background:"black"}}>
      <h2 className="heading" style={{textAlign:"center",paddingTop:"20px",color:"white"}}>News-Top Headlines</h2>
      {articles.map((news,index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default News
