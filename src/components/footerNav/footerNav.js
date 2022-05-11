import './footerNav.css';
const FooterNav=()=>{
    return(
        <>
        <div className='footerNav' >
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-3 col-lg-3 col-md-3'>
<img src="kicksale-logo.png" className='immg'></img>
                    </div>
                    <div className='col-sm-6 col-lg-6 col-md-6' style={{marginTop:"30px"}}>
                        <div className='navFooter'>
                        <span>
                            <a href="#">Home</a>
                        </span>
                        <span>
                            <a href="#">ABOUT</a>
                        </span>
                        <span>
                            <a href="#">METAVERSE</a>
                        </span>
                        <span>
                            <a href="#">FAQ</a>
                        </span>
                        <span>
                            <a href="#">CONTACT</a>
                        </span>
                        </div>
                        </div>
                        <div className='col-sm-4\3 col-lg-3 col-md-3' style={{marginTop:"10px"}}>
                            <div className='icons'>
                                <a><img src="vector1.png"></img></a>
                                <a><img src="vector2.png"></img></a>
                                <a><img src="vector3.png"></img></a>
                                <a><img src="vector4.png"></img></a>
                                </div>
                   
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default FooterNav;