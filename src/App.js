import { BrowserRouter , Routes, Route } from "react-router-dom";
import './css/tailwind.css';
import Index from './components/Pages/Index';
import Projects from "./components/Pages/Projects";
import Error404 from "./components/Pages/Error404";
import ProjectExpanded from "./components/Pages/ProjectExpanded";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/inicio' element={<Index/>}/>
        <Route path='/proyectos' element={<Projects/>}/>
        <Route path='/detalle' element={<ProjectExpanded/>}/>
        <Route path='/' element={<Index/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
      
    </BrowserRouter>

  );
}

export default App;
