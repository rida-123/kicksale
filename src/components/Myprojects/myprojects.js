import ProjectsNav from "../projectsNav/projectsNav";
import AboutProject from "../aboutprojects/aboutprojects";
import './myprojects.css';
import FooterProjectNav from "../footerProjectNav/footerProjectNav";
const Myprojects=()=>{
    return(
        <>
        <div className="myproj">
        <ProjectsNav></ProjectsNav>
        <AboutProject></AboutProject>
        <FooterProjectNav/>
        </div>
 
        </>
    )
}
export default Myprojects