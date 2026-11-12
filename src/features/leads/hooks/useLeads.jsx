import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export const useLeads = ()=>{
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

   const navigate = useNavigate();

  const [leads, setLeads] = useState(JSON.parse(localStorage.getItem('leads') || []))
  console.log(leads)

  const onSubmit = async (data) => {
    console.log("Lead Data:", data);
    const newLeads = {
        ...data, id: Date.now() , date : new Date().toISOString()
    }
    const arr = [...leads, newLeads]
    reset()
    setLeads(arr)
    localStorage.setItem('leads', JSON.stringify(arr))
    

  };

  const inputClass =
    "w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-sm bg-white";

  const errorClass = "text-xs text-red-500 mt-1.5";


  function deleteLeads(id){
   const remainingLeads = leads.filter((val)=> val.id !== id)
   setLeads(remainingLeads)
   localStorage.setItem('leads', JSON.stringify(remainingLeads))
  }

  


  return {
    register,
    handleSubmit,
    reset,
    errors,
    isSubmitting,
    onSubmit,
    inputClass,
    errorClass,
    leads,
    navigate,
    deleteLeads
    
  }
}