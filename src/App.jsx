import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter basename="/Eric_website">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<Experience />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
