import React from 'react';

const List = ({ results }) => {    
    return (
    <div>
        {results.map((img) => {
          return (
            <div key={img.id}>
              <img 
              src={img.urls.small}
              alt="unsplashImg"
              className='w-full h-auto rounded-lg mt-4'/>
            </div>
          )
        })}
    </div>
  );
};

export default List