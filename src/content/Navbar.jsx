import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed w-full z-50 text-white overflow-hidden">
      <div className="w-full px-4 flex justify-between items-center py-5">
        
        <div className="text-xl font-bold tracking-widest">
          <Link to={'/'}>
          VALUETEX
          </Link>
        </div>

        <ul className="hidden md:flex gap-6 text-sm">
          <li><Link to={'/about-us'}>About</Link></li>
          <li><Link to={'/products'}>Products</Link></li>
           <li><Link to={'/manufacture'}>Manufacturing</Link></li>
          <li><Link to={'/service'}>Services</Link></li>
          <li><Link to={'/why-us'}>Why Us</Link></li>
          <li><Link to={'/contact-us'} >Contact</Link></li>
           
        </ul>

        <div className="flex gap-3 p-2 md:p-0">
          <button className="border border-white px-4 py-2 text-sm">
            Login
          </button>
          <button className="bg-[#c8a46b] px-4 py-2 text-black text-sm">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;