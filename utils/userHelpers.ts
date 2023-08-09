const isProduction = process.env.NODE_ENV === "production";
const URL = isProduction
  ? process.env.NEXT_PUBLIC_HOST_URL 
  : process.env.NEXT_PUBLIC_LOCAL_URL; 

export const fetchUsers = async (page = 1, limit = 10) => {
    const response = await fetch(`${URL}/api/accounts?page=${page}&limit=${limit}`);
    const data = await response.json();
    return data;
  };

  export const fetchUser= async (userEmail : string) => {
    const response = await fetch(`${URL}/api/accounts?userEmail=${userEmail}`);
    const data = await response.json();
    return data;
  };


 //posting a new book
export const addUser = async (formData: any) => {
    console.log(formData)
    try {
        const options = {
            method : "POST",
            headers :{ "Content-Type" : "application/json"},
            body : JSON.stringify(formData)
        }
        
        const response = await fetch(`${URL}/api/accounts`,options)
        const data = await response.json()

        return data
    } catch (error) {
        console.log(error)
    }
 }

  //updating a new book
export const updateUser = async (userId : string ,formData:Object) =>{
    try {
        const options = {
            method : "PUT",
            headers :{ "Content-Type" : "application/json"},
            body : JSON.stringify(formData)
        }
        const response = await fetch(`${URL}/api/accounts?userId=${userId}`,options)
        const data = await response.json()

        return data
    } catch (error) {
        return error
    }
 }

export const deleteUser = async (userId : string) =>{
    try {
        const options = {
            method : "DELETE",
            headers :{ "Content-Type" : "application/json"}
        }
        const response = await fetch(`${URL}/api/accounts?userId=${userId}`,options)
        const data = await response.json()

        return data
    } catch (error) {
        return error
    }
 }