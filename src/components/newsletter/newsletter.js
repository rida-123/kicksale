import './newsletter.css';
const Newsletter=()=>{
    return(
        <>
        <div className='news' style={{paddingBottom:'40px'}}>
            <div className='container ne' style={{paddingTop:"100px",maxWidth:"1160px"}}>
            <div className='row newsletter'>
                <div className='col-sm-12 col-12 col-md-4 col-lg-4' style={{textAlign:"center"}}>
<img src="ph.png" className='photo'></img>
                </div>
                <div className='col-12 col-sm-12 col-md-8 col-lg-8'>
                    <div className='newss'>
                    <h1 className='newsLetterHeading'>Follow & Subscribe to our Newsletter.</h1>
                    <p>Ready to get started, Get our Newsletter and join the Community!
</p>

<input className="inputfieldss" type="text" placeholder="Email"/>

   <input type="button" value="Subscribe"className="btn19"/>      
               
                    </div>
      
                    </div>
            </div>
            </div>

        </div>
        </>
    )
}
export default Newsletter;