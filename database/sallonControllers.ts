import type { NextApiRequest, NextApiResponse } from 'next'

import SalonModel from '@/models/SalonModel';


export async function getSalons(req: NextApiRequest, res: NextApiResponse) {
    try {
         const salonName = req.query?.salonName;
         const page = parseInt(req.query.page as string) || 1;
         const limit = parseInt(req.query.limit as string) || 50;
        let salons;
        if (salonName) {
          // Fetch user data by email
          salons = await SalonModel.find({ name: salonName });
        } else {
          if(page && limit) {
          const skip: number = (page - 1) * limit;
          salons = await SalonModel.find({}).skip(skip).limit(limit);
        }
        }   
        if (!salons) {
          return res.status(400).json({ error: "salons Not Found" });
        }
        return res.status(200).json(salons);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error });
      }
  }

  export async function postSalon(req: NextApiRequest, res: NextApiResponse) {
    try {
        const body = req.body;
        const newUser = await SalonModel.create(body);
        return res.status(200).json({'USER CREATED ' : newUser});
      } catch (error) {
        console.error(error);
        return res.status(500).json({error});
      }
    }

export async function deletedalon(req : NextApiRequest , res : NextApiResponse){
    try{
        
        const {salonId} = req.query;
 
         const deletedSalon = await SalonModel.findByIdAndDelete(salonId);
 
         if(!deletedSalon){
                 return res.status(400).json({error : 'error deleting salon'})
         }
 
         return res.status(200).json({'Salon Deleted' : deletedSalon})
 
     }catch(error){
        return res.status(500).json( {'ERROR ' : error})
     }
}

export async function updateSalon(req : NextApiRequest , res : NextApiResponse){
    try {
        const {salonId} = req.query;
  
        const formData = req.body;
    
        if(salonId && formData){
          const salon = await SalonModel.findByIdAndUpdate(salonId,formData)
          return res.status(200).json({"product Modified" : salon})
        }
        return res.status(400).json({error : "salon Not Selected"})
      } catch (err) {
          return res.status(500).json({ err });
      }
}