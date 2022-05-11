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
                        <div className='col-sm-4\3 col-lg-3 col-md-3' style={{marginTop:"10px", textAlign:"right"}}>
                            <div className='icons'>
                                <a href="#"><img src="vector1.png"></img></a>
                                <a href="#"><img src="vector2.png"></img></a>
                                <a href="#"><img src="vector3.png"></img></a>
                                <a href="#"><img src="vector4.png"></img></a>
                                </div>
                   
                        </div>
                </div>
            </div>
            <br></br>
        <br></br>
        <hr style={{backgroundColor:'white'}}></hr>
        <br></br>
        <div className='container-fluid' style={{backgroundColor:"#090713",paddingBottom:"20px"}}>
        <div className='row'>
            <div className='col-sm-4 col-md-4 col-lg-4'>
                <p className='para11'>Copyright Kicksale © 2022. All rights reserved</p>
            </div>
            <div className='col-sm-8 col-md-8 col-lg-8' style={{textAlign:"right"}}>
            <div className='navFooter1'>
                        <span>
                            <a href="#">Privacy Policy</a>
                        </span>
                        <span>
                            <a href="#">Terms & Conditions</a>
                        </span>
                        <span>
                            <a href="#">Disclaimer</a>
                        </span>
                     
                        </div>
            </div>
        </div>
        </div>
        </div>
    
       
        </>
    )
}
export default FooterNav;