import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className ="container mx-auto flex justify-between items-center px-6 py-4 border-b border-gray-700 ">
      <Link to="/" className ="text-lg hover:text-sky-600"> 🏠 dardanj.com </Link>
      <div className ="space-x-6 text-sm">
        <Link to ="/projects" className ="hover:text-sky-600"> 🧑‍💻 Projects </Link>
        <Link to ="/resume" className ="hover:text-sky-600"> 📄 Resume </Link>
        <Link to ="/contact" className ="hover:text-sky-600"> 📅 Contact </Link>
      </div>
    </nav>
  );
}
