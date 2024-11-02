import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ filter, setFilter, onSortChange }) => { 
  const location = useLocation();
  const showSearch = location.pathname === '/';

  const handleSortChange = (event) => {
    onSortChange(event.target.value);
  };

  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center">
      <Link to="/" className="text-white text-2xl font-bold">
        Pizza App
      </Link>
      {showSearch && (
        <input
          type="text"
          placeholder="Search for pizza.."
          className="p-2 rounded-md text-gray-900 w-96 focus:bg-gray-300 transition duration-200"
          value={filter} 
          onChange={(e) => setFilter(e.target.value)} 
        />
      )}
      {showSearch && ( 
        <select onChange={handleSortChange} className="ml-4 p-2 rounded-md text-gray-900">
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      )}
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white">Home</Link>
        </li>
        <li>
          <Link to="/blog" className="text-white mx-2">Recommendations</Link>
        </li>
        <li>
          <Link to="/payment" className="text-white">Payment</Link>
        </li>
        <li>
          <Link to="/login" className="text-white mx-2">Login</Link>
        </li>
        <li>
          <Link to="/contact" className="text-white mx-2">Contact</Link>
        </li>
        <li>
          <Link to="/about" className="text-white mx-2">About us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;