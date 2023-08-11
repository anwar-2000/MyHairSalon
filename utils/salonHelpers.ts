const isProduction = process.env.NODE_ENV === "production";
const URL = isProduction
  ? process.env.NEXT_PUBLIC_HOST_URL 
  : process.env.NEXT_PUBLIC_LOCAL_URL; 

  console.log(isProduction,URL)

export const fetchSalons = async (page = 1, limit = 30) => {
  try {
    const response = await fetch(`${URL}/api/salons?page=${page}&limit=${limit}`);
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching salons:', error);
    throw error;
  }
};


  export const fetchSalonOwner= async (ownerEmail : string) => {
    const response = await fetch(`${URL}/api/salons?owner=${ownerEmail}`);
    const data = await response.json();
    return data;
  };
  export const fetchSalonByName= async (name : string) => {
    const response = await fetch(`${URL}/api/salons?salon=${name}`);
    const data = await response.json();
    return data;
  };

  export const fetchSalonOfCountryAndPlace= async (country : string , place : string) => {
    const response = await fetch(`${URL}/api/salons?country=${country}&place=${place}`);
    const data = await response.json();
    return data;
  };

const uplaodImage = async (imagePath : string) => {
    try {
      const response = await fetch(`${URL}/api/upload`,{
          method : 'POST',
          body : JSON.stringify({path : imagePath})
      })
      //console.log(response)
      return response.json()
  } catch (error) {
    throw error
  }
  }
export const addSalon = async (ownerEmail : string ,formData: any) => {
    const imageUrl = await uplaodImage(formData.image);
   // console.log(formData)
    try {
        const options = {
            method : "POST",
            headers :{ "Content-Type" : "application/json"},
            body : JSON.stringify({...formData, image: imageUrl.url})
        }
        
        const response = await fetch(`${URL}/api/salons?owner=${ownerEmail}`,options)
        const data = await response.json()

        return data
    } catch (error) {
        console.log(error)
    }
 }

  //updating a new book
export const updateSalon = async (owner : string ,formData:Object) =>{
    console.log(owner,formData);
    try {
        const options = {
            method : "PUT",
            headers :{ "Content-Type" : "application/json"},
            body : JSON.stringify(formData)
        }
        const response = await fetch(`${URL}/api/salons?owner=${owner}`,options)
        const data = await response.json()

        return data
    } catch (error) {
        return error
    }
 }

export const deleteSalon = async (owner : string) =>{
    try {
        const options = {
            method : "DELETE",
            headers :{ "Content-Type" : "application/json"}
        }
        const response = await fetch(`${URL}/api/salons?owner=${owner}`,options)
        const data = await response.json()

        return data
    } catch (error) {
        return error
    }
 }