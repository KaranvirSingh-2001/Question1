import React from 'react';

const flowers = [
 { name: 'Rose', explanation: 'The most common flower.' },
 { name: 'Sunflower', explanation: 'Known for its ability to turn towards the sun.' },
 { name: 'Tulip', explanation: 'Prized for its vibrant colors.' },
];

const trees = [
 { name: 'Oak', explanation: 'A common deciduous tree.' },
 { name: 'Maple', explanation: 'Known for its distinct fall colors.' },
 { name: 'Pine', explanation: 'A common coniferous tree.' },
];

const cars = [
 { name: 'Sedan', explanation: 'A traditional car body style.' },
 { name: 'SUV', explanation: 'An all-terrain vehicle with enhanced off-road capabilities.' },
 { name: 'Sports Car', explanation: 'A high-performance vehicle designed for speed and excitement.' },
];

function TypeList({ category }) {
 const models = category === 'Flowers' ? flowers : category === 'Trees' ? trees : cars;

 return (
    <div>
      {models.map((model) => (
        <div key={model.name}>
          <h2>{model.name}</h2>
          <p>{model.explanation}</p>
        </div>
      ))}
    </div>
 );
}

export default TypeList;