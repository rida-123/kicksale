import './newsletter.css';
const Newsletter=()=>{
    return(
        <>
        <div className='news' style={{paddingBottom:'40px'}}>
            <div className='container' style={{paddingTop:"100px",maxWidth:"1160px"}}>
            <div className='row newsletter'>
                <div className='col-sm-4 col-md-4 col-lg-4' style={{textAlign:"center"}}>
<img src="ph.png" className='photo'></img>
                </div>
                <div className='col-sm-8 col-md-8 col-lg-8'>
                    <div className='newss'>
                    <h1 className='newsLetterHeading'>Follow & Subscribe to our Newsletter.</h1>
                    <p>Ready to get started, Get our Newsletter and join the Community!
</p>
<div class="input-group mb-3">
  <input type="text" className="form-control" placeholder="Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div class="input-group-append">
  <button class="btn" type="button">Subscribe</button>
  </div>
</div>
                    </div>
      
                    </div>
            </div>
            </div>

        </div>
        </>
    )
}
export default Newsletter;