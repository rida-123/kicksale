import './roadmap.css'
import RoadmapNav from '../roadmapNav/roadmapNav';
import RoadmapDetail from '../roadmapDetail/roadmapDetail';
import FooterRoadmap from '../footerRoadmap/footerRoadmap';
import MobileRoadmapNav from '../mobileRoadmapNav/mobileRoadmapNav';
import MobileRoadmapDetail from '../MobileRoadmapDetail/mobileRoadmapDetail';
import { useState ,useEffect} from 'react';

const Roadmap=()=>{
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
  useEffect(() => {
    window.addEventListener('resize', e => {
      setWindowWidth(window.innerWidth);
    });
  }, [window.innerWidth]);
  
  if(windowWidth>990)
    return(
        
        <>
        <div className="roadmap">
           
            <RoadmapNav></RoadmapNav>
            <RoadmapDetail></RoadmapDetail>
            <FooterRoadmap></FooterRoadmap>
        </div>
        </>
    )
    else
    return(
        <>
          <div className="roadmap">
          <MobileRoadmapNav/>
          <MobileRoadmapDetail></MobileRoadmapDetail>
          <FooterRoadmap></FooterRoadmap>
          </div>
   
        </>
    )
  
    }
export default Roadmap;