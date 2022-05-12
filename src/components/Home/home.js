import Header from "../header/header";
import Projects from "../projects/projects";
import About from '../about/about';
import Table from '../table/table';
import Faq from "../faq/faq";
import Newsletter from '../newsletter/newsletter';
import FooterNav from "../footerNav/footerNav";
const Home=()=>{
    return(
        <>
        <Header></Header>
  <Projects/>
  <About/>
  <Table></Table>
  <Faq></Faq>
  <Newsletter/>
  <FooterNav/>
        </>
    )
}
export default Home