import React from 'react';

const Navbar = () => {    
    return (
    <div>
        <ul className='w-full flex text-center'>
            <li className='w-4/5'>Dogs and Cats</li>
            <li className='flex w-1/5'>
                <div className='w-1/2 outline-none'><i className="far fa-bell"></i></div>
                <button 
                className='w-1/2'
                
                >
                    <i className="far fa-user"></i>
                </button>
            </li>

        </ul>
    </div>
  );
};

export default Navbar