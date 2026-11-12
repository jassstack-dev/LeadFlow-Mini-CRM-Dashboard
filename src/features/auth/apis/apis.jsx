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


 export const AuthMe =async ()=>{
    try {
        const token = localStorage.getItem('users')

        if(!token) return null

        const res = await authInstance.get('auth/me', {
            headers:{
                 'Authorization': `Bearer ${token}`
            }
        })
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log('error in auth api', error)
          throw error;
    }
}



