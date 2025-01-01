
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'
import Projects from './pages/projects'



function App() {
  return(
    
    <div>
  
      <BrowserRouter>
        <Routes>
          <Route index element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path = "*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
