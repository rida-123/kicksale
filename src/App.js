import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Projects from './components/projects/projects';
import About from './components/about/about';
import Table from './components/table/table';
import Faq from './components/faq/faq';
import Newsletter from './components/newsletter/newsletter';
import FooterNav from './components/footerNav/footerNav';
function App() {
  return (
    <div className="App">
  <Header></Header>
  <Projects/>
  <About/>
  <Table></Table>
  <Faq></Faq>
  <Newsletter/>
  <FooterNav/>
    </div>
  );
}

export default App;
