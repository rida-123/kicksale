import './faq.css';
import $ from 'jquery';





const Faq=()=>{
    return(
        <>
        <div className='faq' style={{paddingBottom:"40px"}}>
         <h3 className='faqHead'>FREQUENTLY ASK QUESTIONS</h3>
         <br></br>
       
         <div id="main">
  <div className="container" >
<div className="accordion" id="faq">
                    <div className="card" style={{backgroundColor:"transparent",color:"white"}} >
                        <div className="card-header" id="faqhead1">
                            <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq1"
                            aria-expanded="true" aria-controls="faq1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                        </div>

                        <div id="faq1" className="collapse" aria-labelledby="faqhead1" data-parent="#faq">
                            <div className="card-body" style={{backgroundColor:"#080C48",borderRadius:"20px"}}>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. 
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{backgroundColor:"transparent",color:"white"}}>
                        <div className="card-header" id="faqhead2">
                            <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq2"
                            aria-expanded="true" aria-controls="faq2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                        </div>

                        <div id="faq2" className="collapse" aria-labelledby="faqhead2" data-parent="#faq">
                            <div className="card-body" style={{backgroundColor:"#080C48",borderRadius:"20px"}}>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{backgroundColor:"transparent",color:"white"}}>
                        <div className="card-header" id="faqhead3">
                            <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq3"
                            aria-expanded="true" aria-controls="faq3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                        </div>

                        <div id="faq3" className="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                            <div className="card-body" style={{backgroundColor:"#080C48",borderRadius:"20px"}}>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                moon officia aute,samus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{backgroundColor:"transparent",color:"white"}}>
                        <div className="card-header" id="faqhead4">
                            <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq4"
                            aria-expanded="true" aria-controls="faq3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                        </div>

                        <div id="faq4" className="collapse" aria-labelledby="faqhead4" data-parent="#faq">
                            <div className="card-body" style={{backgroundColor:"#080C48",borderRadius:"20px"}}>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                Brunch 3 wolf moon tempor,  labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{backgroundColor:"transparent",color:"white"}}>
                        <div className="card-header" id="faqhead5">
                            <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq5"
                            aria-expanded="true" aria-controls="faq3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                        </div>

                        <div id="faq5" className="collapse" aria-labelledby="faqhead5" data-parent="#faq">
                            <div className="card-body" style={{backgroundColor:"#080C48",borderRadius:"20px"}}>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                Brunch 3 wolf moon tempor, Leggings occaecat craft beer farm-to-table, raw denim
                                aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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
export default Faq;