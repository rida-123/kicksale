import './roadmap.css'
import RoadmapNav from '../roadmapNav/roadmapNav';
import RoadmapDetail from '../roadmapDetail/roadmapDetail';
import FooterRoadmap from '../footerRoadmap/footerRoadmap';
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
       <RoadmapNav></RoadmapNav>
        </>
    )
  
    }
export default Roadmap;