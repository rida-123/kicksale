import ProjectsNav from "../projectsNav/projectsNav";
import AboutProject from "../aboutprojects/aboutprojects";
import './myprojects.css'
const Myprojects=()=>{
    return(
        <>
        <div className="myproj">
        <ProjectsNav></ProjectsNav>
        <AboutProject></AboutProject>
        </div>
 
        </>
    )
}
export default Myprojects