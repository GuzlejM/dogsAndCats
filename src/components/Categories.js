import React from 'react';

const Categories = ({ getImages }) => {


    return (
    <div>
        <button
        value='dog'
        className="w-1/3 outline-none"
        onClick={getImages}
        >
            Dogs
        </button>
        <button
        value='cat'
        className="w-1/3 outline-none"
        onClick={getImages}
        >
            Cats
        </button>
        <button
        value='animal'
        className="w-1/3 outline-none"
        onClick={getImages}
        >
            Other
        </button>
    </div>
  );
};

export default Categories