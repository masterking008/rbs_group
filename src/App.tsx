
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Research from './pages/Research';
import Group from './pages/Group';
import Publications from './pages/Publications';
import Resources from './pages/Resources';
import PhotoGallery from './pages/PhotoGallery';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-['Plus_Jakarta_Sans']">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/group" element={<Group />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/photogallery" element={<PhotoGallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;