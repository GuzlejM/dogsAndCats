import React, { useState } from 'react';
//import unsplash from '../api/unsplash';
import axios from 'axios';
import Navbar from './Navbar';
import Categories from './Categories';
import List from './List';
import Footer from './Footer';
import unsplash from '../apis/unsplash';


const App = () => {
  const clientId = 'YGGMc3qjq5OLyki5BXQAKCV9ZMkJd59c7LRUI6kVlb0';
  const getResponse = async () => {
    const res = await axios.get(`https://api.unsplash.com/search/photos?query=dogs&client_id=${clientId}`)
    console.log(res.data.results)
    return res
  }

  getResponse();

    return (
    <div className='p-2'>
        <Navbar />
        <Categories />
        
        <List />
        <Footer />
    </div>
  );
};

export default App