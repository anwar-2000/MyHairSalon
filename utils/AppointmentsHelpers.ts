const URL=process.env.NEXT_PUBLIC_API_URL;


export const createAppointment = async (formData : any) =>{
    console.log(formData)
    try {
        const options = {
            method : "POST",
            headers :{ "Content-Type" : "application/json"},
            body : JSON.stringify(formData)
        }
        
        const response = await fetch(`${URL}/api/appointments`,options)
        const data = await response.json()

        return data
    } catch (error) {
        console.log(error)
    }
}

export const fetchSalonAppointments = async (salon : string) => {
    try {
        const response = await fetch(`${URL}/api/appointments?salon=${salon}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

