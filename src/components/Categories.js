import React from 'react';

const Categories = ({ getDogs, getCats, getAnimals }) => {


    return (
    <div>
        <button 
        className="w-1/3 outline-none"
        onClick={getDogs}
        >
            Dogs
        </button>
        <button 
        className="w-1/3 outline-none"
        onClick={getCats}
        >
            Cats
        </button>
        <button 
        className="w-1/3 outline-none"
        onClick={getAnimals}
        >
            Other
        </button>
    </div>
  );
};

export default Categories