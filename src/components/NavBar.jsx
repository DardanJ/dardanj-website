// src/components/NavBar.jsx
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/Projects">Projects</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  );
}
