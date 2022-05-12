import './aboutprojects.css'
const AboutProject=()=>{
    return (
        <>
        <h1 className="headingPro">PROJECT</h1>
     <div className='container'>
         <h4 className='livepro'>Live Projects</h4>
         <br></br>
         <br></br>
         <div className="card" style={{ width: "25rem" }}>
  <img className="card-img-top" src="fullsize.png" alt="Card image cap" />
  <div className="card-body">
    <p className="card-text">
        <div className='row'>
            <div className='col-sm-1 col-md-1 col-lg-1'>
            <img src="Line 17.png"></img>
            </div>
            <div className='col-sm-11 col-md-11 col-lg-11'>
            <button className='btn8'>REGISTRATION CLOSED</button>
                                                   
                 <img src="Capture.PNG " style={{marginLeft:"20px"}}></img>
                <span className='avaxtxt'>Avax</span>
                <h3 className='proHead'>MetaLand</h3>
                <p className='propara'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.</p>
            
            </div>
        </div>
        <div className='icons1'>
                                <a href="#"><img src="vector1.png"></img></a>
                                <a href="#"><img src="vector2.png"></img></a>
                                <a href="#"><img src="vector5.png"></img></a>
                                <a href="#"><img src="vector3.png"></img></a>
                                <a href="#"><img src="vector4.png"></img></a>
                             
                                </div>


    </p>
  </div>
</div>

         </div>
        |</>
    )
}
export default AboutProject;