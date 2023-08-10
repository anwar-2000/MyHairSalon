"use client"

import React, { useState } from 'react'
import classes from "@/styles/myArtists.module.css"
import ArtistCard from './ArtistCard'
import { updateSalon } from '@/utils/salonHelpers';

interface artist{
  name : string;
  price : number;
}
interface Props {
  artists : artist[];
  owner : string;
}

const MyArtists:React.FC<Props> = ({artists,owner}) => {
  const [newArtists, setnewArtists] = useState<artist[]>(artists)
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number>(0);

  const handleAdd = () => {
    if(name==="" || price===0){
        return;
    }
     newArtists ? setnewArtists([...newArtists, { name, price}]) : setnewArtists([{ name, price }])  ;
    setName('');
    setPrice(0);
  };
  const savingData = async (owner:string) =>{

    let formData = {
      artists : newArtists
    }
        const updatedSalon = await updateSalon(owner,formData)
        //console.log(updatedSalon)
  }

  return <div className={classes.haircutForm__container}>
        <div className={classes.inputs}>
        <input
        type="text"
        placeholder="Artist name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        onChange={e => setPrice(e.target.value as unknown as number)}
      />
        <button type="button" onClick={handleAdd}>Add</button>
</div>
      
      <ul>
        {newArtists && newArtists.map((artist, index) => (
            <ArtistCard key={index} artist={artist}/>
        ))}
      </ul>

      <button className={classes.save} onClick={()=>{savingData(owner)}}>Save</button>
    </div>
};


export default MyArtists