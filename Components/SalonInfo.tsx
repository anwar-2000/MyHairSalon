"use client"
import React, { ChangeEvent, useState } from 'react'
import classes from "@/styles/salonInfo.module.css"
import { addSalon, days, updateSalon } from '@/utils/salonHelpers';
import HaircutsForm from './HaircutsForm';
import Calendar from 'react-calendar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-calendar/dist/Calendar.css";
import { add, format, setHours, setMinutes, startOfHour } from 'date-fns';

interface Props {
    name : string;
    description : string;
    address : string;
    owner : string;
    country : string;
    place : string;
    image : string;
    haircuts : any[];
    weekends : any[];
    closedDays : any[];
    openDays : any[];
}

interface Haircut {
    name: string;
    price: string;
  }

const SalonInfo:React.FC<Props> = ({name,address,place,owner,country,image,haircuts,description,weekends,closedDays,openDays}) => {
    const [openDay, setOpenDay] = useState(openDays?.length > 0 ? openDays[0] : null);
   // console.log(openDay,closedDays,weekends);
    const [updatedName, setupdatedName] = useState(name)
    const [updatedDescription, setupdatedDescription] = useState(description)
    const [updatedCountry, setupdatedCountry] = useState(country)
    const [updatedAddress, setupdatedAddress] = useState(address)
    const [updatedPlace, setupdatedPlace] = useState(place);
    const [updatedImage, setupdatedImage] = useState(image);
    const [Newhaircuts, setNewHaircuts] = useState<Haircut[]>(haircuts);
    const [selectedDays, setSelectedDays] = useState<string[]>([]);
    const [creating, setcreating] = useState(false)
    const [openHour, setOpenHour] = useState<string>("");
    const [closingHour, setClosingHour] = useState<string>("");


    const [newOpenDays, setNewOpenDays] = useState<any[]>([]);
    const [NewCloseDays, setNewCloseDays] = useState<any[]>([]);
    
  //extracting the weekends
let weekend1:number, weekend2: number;
if (weekends && weekends.length >= 2) {
  weekend1 = days.indexOf(weekends[0]);
  weekend2 = days.indexOf(weekends[1]);
}

    //extracting the closed day
    const closedThisDay = closedDays &&  closedDays[0]?.date ;



const tileClassName = ({ date = new Date() }) => {
  if (date.getDay() === weekend1 || date.getDay() === weekend2) {
    return 'weekend disabled';
  }
  return null;
};



    const getTimes = () => {
        const  justDate  = new Date();
        const beginning = setHours(setMinutes(startOfHour(justDate), 0), 9); // Set starting time to 9:00 AM
        const end = setHours(setMinutes(startOfHour(justDate), 0), 21);
        const interval = 30; // minutes
    
        const times = [];
    
        for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
          times.push(i);
        }
    
        return times;
      };
    
      const times = getTimes();

    const handleDaySelection = (e:React.ChangeEvent<HTMLInputElement> , day: string) => {
      e.preventDefault();
        if (selectedDays.includes(day)) {
            setSelectedDays(selectedDays.filter(selectedDay => selectedDay !== day));
        } else {
            setSelectedDays([...selectedDays, day]);
        }
    };

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
        setcreating(true)
        setNewOpenDays([{startTime : openHour , endTime : closingHour}])
        let formData = {
            name : updatedName,
            country : updatedCountry ,
            description : updatedDescription,
            owner : email,
            place : updatedPlace,
            address : updatedAddress,
            image : updatedImage,
            haircuts : Newhaircuts,
            weekends : selectedDays,
            openDays : newOpenDays,
            closedDays : NewCloseDays
        }
        console.log(formData)

        let updatedSalon = null;
        if(formData && !name){
        updatedSalon = await addSalon(email,formData);
        }else if (formData && name){
        updatedSalon = await updateSalon(email,formData);
        }
        if(updatedSalon){
          toast.success("Done", {
            position: toast.POSITION.TOP_RIGHT,
            theme: "colored"
        });  

        }
        setcreating(false)
      }

  return <form onSubmit={(e)=>EditPersonalInfos(e,owner)}>
        <div className={classes.saloninfo__container}>
        <div className={classes.item}>
            <input defaultValue={name || ""} onChange={(e)=>setupdatedName(e.target.value)} placeholder="name"/>
            
        </div>
        <div className={classes.item}>
            <input defaultValue={description || ""} onChange={(e)=>setupdatedDescription(e.target.value)} placeholder="description"/>
            
        </div>
        <div className={classes.item} >
            <input onChange={(e)=>setupdatedCountry(e.target.value)} defaultValue={country || ""} placeholder="country" />
            
        </div>
        <div className={classes.item}>
            <input defaultValue={place || ""} onChange={(e)=>setupdatedPlace(e.target.value)} placeholder="place"/>
            
        </div>
        <div className={classes.item}>
            <input defaultValue={address || ""} onChange={(e)=>setupdatedAddress(e.target.value)} placeholder="Adresse"/>
            
        </div>
        {!image && <div className={classes.item}>
            <input type="file" onChange={handleImageChange}/>
            
        </div>}
        {image && <img src={image} alt="" width={350} height={50}/>}
        <div className={classes.haircutsForm}>
                <HaircutsForm addHaircut={setNewHaircuts} haircuts={Newhaircuts} />
        </div>
        <div className={classes.item}>
        <div className={classes.weekendDays}>
            <h3>Weekend Days :</h3>
            {days.map((day, index) => (
                <label key={index}>
                    <input
    type="checkbox"
    checked={selectedDays.includes(day) || (weekends && weekends.length >= 2 && (day === weekends[0] || day === weekends[1]))}
    onChange={(e) => handleDaySelection(e,day)}
/>
{day}

                </label>
            ))}
        </div>
        </div>
        <div className={classes.item}>
            <div className={classes.closeDays}>
                <h3>Closed this Day :</h3>
                <Calendar minDate={new Date()}
                  /**days and closed days */
                  view="month"
                  tileClassName={tileClassName}
                  tileDisabled={({ date }) => closedThisDay &&  date.toDateString() === closedThisDay.toDateString()}
                  onClickDay={(date) =>
                    setNewCloseDays([...NewCloseDays , {date : date}])
                  }/>
            </div>
        </div>

        <div className={classes.item}>
            <div className={classes.closeDays}>
                <h3>Opening Hour:</h3>
                <div className={classes.hours}>
                  {times &&
                    times.map((time, index) => (
                      <div key={`time-${index}`}>
                        <button  onClick={(e)=>{
                          e.preventDefault();
                          setOpenHour(format(time,"kk:mm"))}}>
                          {format(time, "kk:mm")}
                        </button>
                      </div>
                    ))}
                </div>
            </div>
        </div>
        <div className={classes.item}>
            <div className={classes.closeDays}>
                <h3>Closing Hour:</h3>
                <div className={classes.closehours}>
                  {times &&
                    times.map((time, index) => (
                      <div key={`time-${index}`}>
                        <button  onClick={(e)=>{
                          e.preventDefault();
                          setClosingHour(format(time,"kk:mm"))}}>
                          {format(time, "kk:mm")}
                        </button>
                      </div>
                    ))}
                </div>
            </div>
        </div>

        <button type='submit' className={classes.button}>
           {creating ? 'creation de votre Salon' :'Créer mon salon'}
        </button>
        </div>
  </form>
 
 
}

export default SalonInfo