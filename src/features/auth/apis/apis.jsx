import { authInstance } from "../../../config/authInstance"

 export const authApi =async (credentials)=>{
    try {
        const res = await authInstance.post('/auth/login', credentials)
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log('error in auth api', error)
          throw error;
    }
}

