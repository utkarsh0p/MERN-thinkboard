import React from 'react';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-primary flex justify-between pr-4 pl-3 pt-4 pb-3 items-center">
      <div className="font-bold text-lg font-mono">Think Board</div>
      <div>
        <Link
          to={'/create'}
          className="flex justify-between items-center bg-black p-3 rounded-xl"
        >
          <div>
            <Plus className="text-white" />
          </div>
          <span className="text-white">NewNote</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
