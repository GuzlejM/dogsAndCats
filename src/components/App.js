import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Categories from './Categories';
import List from './List';
import Footer from './Footer';


const App = () => {
  const [ results, setResults ] = useState([]);

  //client ID to unsplash API
  const clientId = 'YGGMc3qjq5OLyki5BXQAKCV9ZMkJd59c7LRUI6kVlb0';

  // Generating Landing page pictures.
  const getLandingPage= async () => {
    const res = await axios.get(
      `https://api.unsplash.com/search/photos?query=pets&client_id=${clientId}&count=10`
      )
    setResults(res.data.results)
  }

  useEffect(() => {
    getLandingPage()
  }, []);


  // Calling unsplash API and fetching pictures
  const getImages = async (e) => {
    const res = await axios.get(
      `https://api.unsplash.com/search/photos?query=${e.target.value}&client_id=${clientId}&count=10`
      )
    setResults(res.data.results)

    console.log(res)
  }

  return (
  <div className='p-2'>
      <Navbar />
      <Categories getImages={getImages}/>
      <List results={results}/>
      <Footer />
  </div>
  );
};

export default App