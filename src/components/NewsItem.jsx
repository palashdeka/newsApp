import image from '../assets/news img.jpg'
import '../App.css';
const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-4 mx-4 px-2 py-2"  style={{ maxWidth:"345px" }}>
    <img src={src?src:image} style={{height:"200px",width:"330px"}} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title" style={{fontSize:"1.5rem"}}>{title.slice(0,50)}</h5>
      <p className="card-text" style={{fontSize:"1rem"}}>
        {description?description.slice(0,100):"Deliver headline news to your employees within their Employee Workspace homepage. Create content for your Employee News Banner, and then add it to your Employee Workspace site."}
      </p>
      <a href={url} className="btn btn-primary" style={{fontSize:"1.2rem"}}>
        Read More
        <i class="fa-solid fa-arrow-right px-2 py-2 my-1"></i>
      </a>
    </div>
  </div>
  
  )
}

export default NewsItem
