import React from 'react';

const List = ({ results }) => {    
    return (
    <div >
        {results.map((img) => {
          return (
            <div key={img.id} className='relative'>
              <img 
              src={img.urls.small}
              alt="unsplashImg"
              className='w-full h-auto rounded-lg mt-4'
              />
              <div className='bg-gray-200 rounded-b-lg absolute bottom-0 left-0 w-full bg-opacity-75'>
                  <h2 className='ml-2 mt-1'>KOKOT</h2>
                  <h2 className='ml-2 mt-1 mb-1'>Trencin</h2>
                  <h2 className='ml-2 mb-1'>14</h2>
              </div>
            </div>
          )
        })}
    </div>
  );
};

export default List