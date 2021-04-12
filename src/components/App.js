import React from 'react';
import Navbar from './Navbar';
import Categories from './Categories';
import List from './List';
import Footer from './Footer';


const App = () => {    
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