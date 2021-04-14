import React, { useState } from 'react';
//import unsplash from '../api/unsplash';
import axios from 'axios';
import Navbar from './Navbar';
import Categories from './Categories';
//import List from './List';
import Footer from './Footer';
import unsplash from '../apis/unsplash';


const App = () => {
  const [ results, setResults ] = useState([]);


  const clientId = 'YGGMc3qjq5OLyki5BXQAKCV9ZMkJd59c7LRUI6kVlb0';

  const getDogs = async () => {
    const res = await axios.get(
      `https://api.unsplash.com/search/photos?query=dog&client_id=${clientId}&count=10`
      )
    setResults(res.data.results)
  }

  const getCats = async () => {
    const res = await axios.get(
      `https://api.unsplash.com/search/photos?query=cat&client_id=${clientId}&count=10`
      )
    setResults(res.data.results)
  }

  const getAnimals = async () => {
    const res = await axios.get(
      `https://api.unsplash.com/search/photos?query=animal&client_id=${clientId}&count=10`
      )
    setResults(res.data.results)
  }

    return (
    <div className='p-2'>
        <Navbar />
        <Categories getDogs={getDogs} getCats={getCats} getAnimals={getAnimals}/>
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
        <Footer />
    </div>
  );
};

export default App