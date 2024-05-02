import "../App.css"

const Navbar = (setCategory) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" style={{height:"100px",fontSize:'1.3rem'}}>
  <div className="container-fluid" >
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEzElEQVR4nO2dT4gcRRTGSxG9ildB8aYSD6KCtvsn86q6p3tqA3pYEFlFTZCABw8Bb2ZBISeDKB5MLh40Ih4FRcikahKj+bPJSkASPYiGTYyajYGYZDq7mSnp2VVEme7ZZGaruvr7wXefet++r15XdbOMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABwFiI9Q6R3+aTxnQtHx3b/eqqnD36be6KZ7s7Tk3uv3sN8JSsI59r4pLGPFk3QTAfWmFp6hPkKDE5hsO2O5OhgdDBHRCOiA+zB9uOVI6LXb8gS4oiJ6j+UTuN7LmGKHsTgrFhykymdJj6+BoNhcIrnYHSwByCi0+oedKCDPQAGp+hg21OxxBSNDpZ4TEJEBziqxJDlHRiyUgxZtocmiSELHSwxZCGiAwxZGLK8Y5hD1vY3r5v5k+2ha8vWzkivC4Nm+1Swt338ZsSqYPBb7yybC+0rQ9crr47a4JsXcxUYnMJgdHCKDkZEOwpOslJEtO8nWQGGLPumSRiMiJboYOzBASK6ei/dBdiD7ZsmYTD2YHmDHSy2XTbRSwV6YdHQzFxfMVfBc3Bq4i3dwoRI5KXcLx9ZFQzObn2yC4dh65lnuyPdg2Gw57dJMToYBieIaHSwk+A+OEVEY8gyiGjbhxsSQ9boI9oVTWCKhsEBHpPQwRInWfbjWCKi1+8xyRVNYA+GwQH2YHSwxB5sP44lIhpHlQFuk6r98VmM60IYnOC6EB3sJD5+AL7xvaVeTA+q+Hm8k2WqrgQRbd8ECYNHG9E+K0EH2zdBwuD/w7l+v28HR99bL6x0RI3cDlZd5iqcq7f7R/RJ64WVjiiRF/MM/pO5CpF6o38Hn7BeWOmI4sbvfQ0mUr8wV+Fcvdz/H2Mdsl5Y6Yji5Oc8g48yV+Fcb8z7qKoxlVovrnRAYXQiL6I/ZK4SRV/eRaQ6/X58nJy1XlxpWY2p64bzA3kdvI25DOf6eL8fH0bz1gssLauenMv9dJTz1sPMZYjUjrwFJPKC9SJLa+oYER7Oi+dzs7OztzKXIWo+mGdwGM4ZuWlt3+j6ojhZyO1eIr2TlQHO9eG8hWQLtV1suc5qTLWNEAdzDziEaD3EygCRfqpgnzGJ/KNC5naMCI8V7L3qM1YezC15w9aKDppEXrZefDlydUwYfVcQzaojhH6UlQnOW4/lPTKtHH4cMHFy3uPOXTJh9G1B5/b23l2sjBCpd4sWl8V1Pf6p95du2xA55PNmER4qNJdztZCdH7AyEsdf3FEc1X938zerByHlnrAbU1dMVM+P5H+Zu0zUGmdlplbbdy/n+sxgC14xuh7/uDqELVs3TBaq25sl4uTMQHH8n2jeynwgG/+J9OJaFv+PxNdGiCMmDI85JSHmViN4/9rXtDJYbWc+IUTrASJ9+oZM9kqqS6ReYz5C1LybSH1VYXMvErWeZj4zOalvy14MINLX7Bdcr5uIdCsM99/HqkIU6fs5159XwNjTtZp+Ljv8YVUkO8Eh0p9wrtp+GavmidTm6elPb7ddYyeYnNR31mr6RSK9h0iftW0QX7PUVSKlOdevh6HeYLuezpOd7gihH88uLoj0zMr7Xu6ISG0mak3Xavso21udv8cFAAAAAAAAAAAAAAAAAAAAALAK8RcV73uneIlvcwAAAABJRU5ErkJggg==" alt="" width="30" height="24" />
    <a className="navbar-brand" href="#">
      Your News
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="Home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("general")}>
            General
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("business")}>
            Business
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("sports")}>
            Sports
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("science")}>
            Science
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("health")}>
            Health
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("entertaiment")}>
            Entertainment
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("technology")}>
            Technology
          </a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Explore News.."
          aria-label="Search"
        />
        <button className="btn bg-primary" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
