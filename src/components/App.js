import React from 'react';
import Navbar from './Navbar';
import Categories from './Categories';
import List from './List';


const App = () => {    
    return (
    <div>
        <h1>
            Dogs and Cats
        </h1>
        <Navbar />
        <Categories />
        <List />
    </div>
  );
};

export default App