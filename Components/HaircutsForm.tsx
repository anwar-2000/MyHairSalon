import React, { useState } from 'react';

import classes from "@/styles/haircutsform.module.css"
interface Haircut {
  name: string;
  price: string;
}

const HaircutsForm: React.FC = () => {
  const [haircuts, setHaircuts] = useState<Haircut[]>([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAdd = () => {
    
    if(name==="" || price===""){
        return;
    }
    setHaircuts([...haircuts, { name, price }]);
    setName('');
    setPrice('');
  };

  return (
    <div className={classes.haircutForm__container}>
        <div className={classes.inputs}>
        <input
        type="text"
        placeholder="Haircut name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
        <button onClick={handleAdd}>Add</button>
</div>
      
      <ul>
        {haircuts.map((haircut, index) => (
          <li key={index}>
            {haircut.name} - {haircut.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HaircutsForm
