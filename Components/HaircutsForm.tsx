"use client"
import React, { Dispatch, SetStateAction, useState } from 'react';
import classes from "@/styles/haircutsform.module.css"

interface Haircut {
  name: string;
  price: string;
}
interface Props {
    addHaircut : Dispatch<SetStateAction<Haircut[]>>,
    haircuts : Haircut[]
}
const HaircutsForm: React.FC<Props> = ({haircuts , addHaircut}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAdd = () => {
    
    if(name==="" || price===""){
        return;
    }
     haircuts ? addHaircut([...haircuts, { name, price }]) : addHaircut([{ name, price }])  ;
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
        <button type="button" onClick={handleAdd}>Add</button>
</div>
      
      <ul>
        {haircuts && haircuts.map((haircut, index) => (
          <li key={index}>
            {haircut.name} - {haircut.price} €
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HaircutsForm
