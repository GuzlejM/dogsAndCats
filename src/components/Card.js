import React from 'react';
import faker from 'faker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Card = ({ results }) => {    
    return (
    <div>
        {results.map((img) => {
          return (
            <div
            key={img.id} 
            className='relative'
            onClick={e => console.log(img)}>
              <img 
              /* Showing img.id in the console need to pass it to CARD DETAIL
              onClick={e => console.log(e.target.src, img.id)}*/
              id={img.id}
              src={img.urls.small}
              alt="unsplashImg"
              className='w-full h-auto rounded-lg mt-4'
              />
              <div className='bg-gray-200 rounded-b-lg absolute bottom-0 left-0 w-full bg-opacity-75 flex'>
                  <div className='w-1/2 justify-center'>
                    <h2 className='ml-2 mt-1'>{faker.address.streetName()}</h2>
                    <h2 className='ml-2 mt-1 mb-1'>{faker.address.city()}</h2>
                    <h2 className='ml-2 mb-1'>{Math.floor( Math.random() * 20 ) +1 }</h2>
                  </div>
                  <Router className='w-1/2 flex justify-center content-center'>
                      <Link className='focus:outline-none h-10 w-40 text-white self-center rounded-lg bg-blue-500'>Read more</Link>
                      


                  </Router>
              </div>
            </div>
            
          )
        })}
    </div>
  );
};

export default Card;