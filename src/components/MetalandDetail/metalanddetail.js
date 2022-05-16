import './metalanddetail.css';
const MetalandDetail=()=>{
    return(
        <>
        <div className='metaDetail'>
            <div className='container' style={{paddingTop:"40px",paddingBottom:"70px"}}>
                <div className='row'>
                    <div className=' col-12 col-sm-12 col-md-12 col-lg-6 detailCol'>
<div className='metaDel'>
    <img src="11.png"  style={{backgroundColor:"#5133D5", borderRadius:"100%", padding:"10px 7px 10px 7px" ,width:"80px", height:"80px"}}></img>
<h6 className='h55'>$ KCK</h6>
<h1 className='metaland'>MetaLand</h1>
<p className='pa'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>


<input className="inputfield" type="text" placeholder="Allocation"/>

   <input type="button" value="$1000"className="btn16" disabled/>      
<input className="inputfield" type="text" style={{marginLeft:"15px"}}placeholder="Price per token"/>

   <input type="button" value="$0.05"className="btn16" disabled/>      

</div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-4 detailCol1'>
                        <div className='row'>
                            <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                            <span className='spansss'>07 DAYS LEFT</span>
                            <img src="Line24.png" className="img66" style={{marginLeft:"25px", marginTop:"-20px"}}></img>
                            </div>
                            <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                                <button className='button1'>PRIVATE SALE</button>
                                <button  className='button2'>IDO</button>
                                </div>
                        </div>
                        <hr style={{backgroundColor:"#a9a9af"}}></hr>
                        <h6 style={{color:"#a9a9af"}}>RISING TALENT</h6>
                        <h1 className='usdt'>$400,000<span className='us'>USDT</span></h1>
                        <button className="btn13">JOIN WHITELIST</button>
                        <button className="button5">BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default MetalandDetail;