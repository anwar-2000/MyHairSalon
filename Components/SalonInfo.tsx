"use client"

import React, { ChangeEvent, useState } from 'react'
import classes from "@/styles/salonInfo.module.css"
import {AiFillEdit} from "react-icons/ai"
import { addSalon, updateSalon } from '@/utils/salonHelpers';
import HaircutsForm from './HaircutsForm';

interface Props {
    name : string;
    description : string;
    address : string;
    owner : string;
    country : string;
    place : string;
    image : string;
    haircuts : any[];
}

interface Haircut {
    name: string;
    price: string;
  }

const SalonInfo:React.FC<Props> = ({name,address,place,owner,country,image,haircuts,description}) => {

    const [updatedName, setupdatedName] = useState(name)
    const [updatedDescription, setupdatedDescription] = useState(description)
    const [updatedCountry, setupdatedCountry] = useState(country)
    const [updatedAddress, setupdatedAddress] = useState(address)
    const [updatedPlace, setupdatedPlace] = useState(place);
    const [updatedImage, setupdatedImage] = useState(image);
    const [Newhaircuts, setNewHaircuts] = useState<Haircut[]>(haircuts);


    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
    
        const file = e.target.files?.[0];
    
        if (!file) {
          return;
        }
    
        if (!file.type.includes("image")) {
          return alert("Please Upload an Image File");
        }
    
        const reader = new FileReader();
    
        reader.readAsDataURL(file);
    
        reader.onload = () => {
          const result = reader.result as string;
          setupdatedImage(result);
        };
      };

    async function EditPersonalInfos(e : any , email : string) {
        e.preventDefault();

        let formData = {
            name : updatedName,
            country : updatedCountry ,
            description : updatedDescription,
            owner : email,
            place : updatedPlace,
            address : updatedAddress,
            image : updatedImage,
            haircuts : Newhaircuts
        }
       // console.log(formData)
        let updatedSalon = null;
        if(formData && !name){
        updatedSalon = await addSalon(email,formData);
        }else if (formData && name){
        updatedSalon = await updateSalon(email,formData);
        }
        if(updatedSalon){
            //console.log(updatedSalon);  
        }
      }

  return <form onSubmit={(e)=>EditPersonalInfos(e,owner)}>
        <div className={classes.saloninfo__container}>
        <div className={classes.item}>
            <input defaultValue={name || ""} onChange={(e)=>setupdatedName(e.target.value)} placeholder="name"/>
            <AiFillEdit color='black' size={20}/>
        </div>
        <div className={classes.item}>
            <input defaultValue={description || ""} onChange={(e)=>setupdatedDescription(e.target.value)} placeholder="description"/>
            <AiFillEdit color='black' size={20}/>
        </div>
        <div className={classes.item} >
            <input onChange={(e)=>setupdatedCountry(e.target.value)} defaultValue={country || ""} placeholder="country" />
            <AiFillEdit color='black' size={20}/>
        </div>
        <div className={classes.item}>
            <input defaultValue={place || ""} onChange={(e)=>setupdatedPlace(e.target.value)} placeholder="place"/>
            <AiFillEdit color='black' size={20}/>
        </div>
        <div className={classes.item}>
            <input defaultValue={address || ""} onChange={(e)=>setupdatedAddress(e.target.value)} placeholder="Adresse"/>
            <AiFillEdit color='black' size={20}/>
        </div>
        {!image && <div className={classes.item}>
            <input type="file" onChange={handleImageChange}/>
            <AiFillEdit color='black' size={20}/>
        </div>}
        {image && <img src={image} alt="" width={350} height={50}/>}
        <div>
                <HaircutsForm addHaircut={setNewHaircuts} haircuts={Newhaircuts} />
        </div>
        <button type='submit' className={classes.button}>
            SAVE
        </button>
        </div>
  </form>
 
 
}

export default SalonInfo