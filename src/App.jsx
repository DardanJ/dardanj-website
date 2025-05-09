import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="bg-[#1D1E20] flex flex-col min-h-screen text-white flex-grow">
        <NavBar />
        <main className = "flex-grow container mx-auto">
          <Routes>
            <Route
            path ="/"
            element = {
              <>
                <h1>Welcome to my site!</h1> 
                <button className="btn btn-primary mt-4">Click Me</button>
              </>
              }
            />
            <Route path ="/resume" element = {<Resume />} />
            <Route path ="/projects" element = {<Projects />} />
            <Route path ="/contact" element = {<Contact />} />
          </Routes> 
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
