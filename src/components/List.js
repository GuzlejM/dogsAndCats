import React from 'react';
import Card from './Card';

const List = ({ results }) => {    
    return (
    <div>
        <Card results={results} />
    </div>
  );
};

export default List