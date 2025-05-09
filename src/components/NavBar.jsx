import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className ="container mx-auto flex justify-between items-center px-6 py-4 border-b border-gray-700">
      <Link to="/" className ="text-xl hover:text-sky-600"> 🏠 dardanj.com </Link>
      <div className ="space-x-6 text-lg">
        <NavLink to ="/projects" className={({ isActive }) => isActive ? "text-sky-600" : "hover:text-sky-600"}> 🧑‍💻 Projects </NavLink>
        <NavLink to ="/Resume" className={({ isActive }) => isActive ? "text-sky-600" : "hover:text-sky-600"}> 📄 Resume </NavLink>
        <NavLink to ="/Contact" className={({ isActive }) => isActive ? "text-sky-600" : "hover:text-sky-600"}> 📅 Contact </NavLink>
      </div>
    </nav>
  );
}
