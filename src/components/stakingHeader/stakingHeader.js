import Staking from "../staking/staking"
import './stakingHeader.css'
const StakingHeader=()=>{
    return(
        <>
<h1 className="headingPro">STAKING</h1>
<div className="container foo" >
    <div className="row rowss" >
        <div className="col-sm-12 col-md-12 col-lg-6"  >
<div className="row ">
<h6 className="stat">Stat</h6>
    <div className="col-sm-8 col-md-8 col-lg-8  statRow">
       
        <div className="statInfo">
            <h4 className="statinfo">67,874 KCK = $32.65M</h4>
            <p className="statp">Total staked KCK</p>
           
          <div className='row' style={{paddingTop:"20px"}}>
              <div className='col-5 col-sm-5 col-md-5 col-lg-5'>
                  <p className='gradientpara'  style={{marginLeft:"10px"}}>6.28%
                  <p className="kck">KCK</p></p>
              </div>
              <div className='col-2 col-sm-2 col-md-2 col-lg-2'style={{textAlign:"center"}}>
                  <img src="Line 18.png"></img>
              </div>
            
              <div className='col-5 col-sm-5 col-md-5 col-lg-5' >
              <p className='gradientpara' style={{marginLeft:"10px"}} >1332<p className="kck">No. of Stakers</p></p>
              </div>
   
          
          </div>
        </div>
    </div>
</div>
<div className="row " style={{marginTop:"20px"}} >
<h6 className="stat">Balances</h6>
    <div className="col-sm-8 col-md-8 col-lg-8 statRow" style={{marginTop:"20px"}}>
       
        <div className="statInfo">
          <div className="kck2">
              <img src="whiteicon.png" style={{backgroundColor:"#5133D5", borderRadius:"100%", padding:"7px 3px 7px 3px"}}>

              </img>
              <span className="kckH">&nbsp;&nbsp;KCK</span>
              <span className="kckNum">0</span>
              <br></br>
            
              <div><img src="Line 19.png" className="img9"></img></div>
          </div>
          <div className="kck2" style={{marginTop:"10px"}}>
              <img src="tether.png" style={{width:"50px" ,height:"50px"}}>

              </img>
              <span className="kckH">&nbsp;&nbsp;USDT</span>
              <span className="kckNum">0</span>
              <br></br>
            
              <div><img src="Line 19.png" className="img9"></img></div>
          </div>
          <div className="kck2" style={{marginTop:"10px"}}>
              

       
              <span className="kckH">&nbsp;&nbsp;0 KCK</span>
              
            
              <span className='sbtn10'><button className='btn10'>CLAIM NOW!</button></span>
          </div>
        </div>
    </div>
</div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
         <div className="row">
             <div className="col-sm-10 col-md-10 col-lg-10" style={{marginTop:"35px"}}>
             <center>
             <span className='sbtn11'><button className='btn11'>STAKE</button></span>
             <span className='sbtn13'><button className='btn15' >UNSTAKE</button></span>

</center>
             </div>
             
             <div className="col-sm-8 col-md-8 col-lg-8 col-12 statRow2" >
<span style={{display:"inline-block"}}><h4 className="statinfo">Stake</h4></span>
<img src="setting.png" className="img7"></img>
<div className="inputField">
<div class="input-icons">
<input className="input-field" type="text" placeholder="0.0"/>
<img src="white.png" style={{backgroundColor:"#5133D5", borderRadius:"100%", width:"32px" ,height:"30px" ,padding:"3px 3px 3px 3px"}}></img>
   <input type="button" value="MAX"className="btn12"/>      
                </div>
                <button className="btn13">STAKE</button>
                <div className="info">
                    <span className="text6">You will receive</span>
                    <span className="textDetail">0 USDT</span>
                 
                </div>
                <div className="info1">
                    <span className="text6">Exchange Rates</span>
                    <span className="textDetail">1 USDT = 2.56 KCK</span>
                 
                </div>
                <div className="info1">
                    <span className="text6">Staking KCK</span>
                    <span className="textDetail">8.9 %</span>
                 
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
export default StakingHeader;