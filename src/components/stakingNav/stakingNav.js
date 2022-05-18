import { Link } from 'react-router-dom';
const StakingNav=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
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
                    <Link className="dropdown-item"to="/staking">
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
    )
}
export default StakingNav;