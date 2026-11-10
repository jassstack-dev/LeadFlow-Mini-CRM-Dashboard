import { useForm } from "react-hook-form";
import { authApi } from "../apis/apis"
import { useDispatch } from "react-redux";
import { addUser } from "../store/authSlice";



 export const useAuth = ()=>{
    
const dispatch = useDispatch()

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginSubmit =async (credentials)=>{
  
    try {
        const data =await authApi(credentials)
    console.log(data.accessToken)
    localStorage.setItem('users', JSON.stringify(data.accessToken))
    dispatch(addUser(data))
    } catch (error) {
        console.log(error)
        
    }

  }

  return {

    register,
    handleSubmit,errors,
    loginSubmit
  }
}