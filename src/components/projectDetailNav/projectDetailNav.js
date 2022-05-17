import { Link } from "react-router-dom";
import './projectDetailNav.css'
const ProjectDetailNav=()=>{
    return(
        <>
        <div className='header1'>
        <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
  <img src="kicksale-logo.png" className='img1'></img>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">
          <span className='ido'>IDO</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
         <span className='imo'>IMO</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          <span className='igo'>IGO</span>
          </a>
        </li>
        
   
      </ul>
    
     <ul className="navbar-nav ">
     <li className="nav-item dropdown">
          <a
            className="nav-link "
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            
            <span className='accounts'>ACCOUNTS</span>
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="#">
             LOCKUP
              </a>
            </li>
            <li>
              <Link className="dropdown-item" to="/staking">
           <span className='staking'> STAKING</span> 
              </Link>
            </li>
            <li>
              <a className="dropdown-item" href="#">
         LINKING WALLETS
              </a>
            </li>
            <li>
              <Link className="dropdown-item" to="/myprojects">
         MY PORTFOLIO
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/roadmap">
      ROADMAP
              </Link>
            </li>
          </ul>
        </li>
     </ul>
        <button className="btn1" >
      WALLET
        </button>
  
    </div>
  </div>
</nav>
<div className='main'>
  <div className="container">
      <img src="only.png" style={{backgroundColor:"#5133D5", borderRadius:"100%", padding:"10px 7px 10px 7px" ,width:"80px", height:"80px"}}></img>
 <p className="paraa">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by<br></br> injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem <br></br>Ipsum, you need to be sure there isn't anything.</p>
<div className="allIcons">


<i className="fas fa-file"></i><a href="" className="prodeta"><span className="proDet">Contract Details</span></a>
 <i className="fas fa-globe"></i><a href="" className="prodeta"><span className="proDet">Website</span></a>
 <i className="fa fa-users" aria-hidden="true"></i><a href="" className="prodeta"><span className="proDet">Community</span></a>
</div>

  </div>

</div>


    </div>
        </>
    )
}
export default ProjectDetailNav;