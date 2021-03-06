

import Myprojects from './components/Myprojects/myprojects';
import Home from './components/Home/home';
import Staking from './components/staking/staking';
import ProjectDetail from './components/projectDetail/projectDetail';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Roadmap from './components/roadmap/roadmap';
function App() {
  return (
    <div className="App">
  
  
<BrowserRouter>
<Routes>
  <Route  exact path="/" element={<Home/>}></Route>
  <Route path="/myprojects" element={<Myprojects/>}></Route>
  <Route path="/staking" element={<Staking/>}></Route>
  <Route path="/projectdetail" element={<ProjectDetail/>}></Route>
  <Route path="/roadmap" element={<Roadmap/>}></Route>

</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
