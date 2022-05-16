import ProjectDetailNav from "../projectDetailNav/projectDetailNav";
import DetailInfo from "../detailInfo/detailinfo";
import MetalandDetail from "../MetalandDetail/metalanddetail";
import FooterProjectDetail from "../footerProjectDetail/footerProjectDetail";
const ProjectDetail=()=>{
    return (
        <>
        <ProjectDetailNav/>
        <DetailInfo></DetailInfo>
        <MetalandDetail></MetalandDetail>
        <FooterProjectDetail></FooterProjectDetail>
        </>
    )
}
export default ProjectDetail;