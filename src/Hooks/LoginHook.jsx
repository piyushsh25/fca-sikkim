import axios from "axios"
import { toast } from "react-toastify"

export const loginHandler = async(username, password,navigate) => {
    try{
        const data=await axios.post("https://fca-backend.onrender.com/login",{username,password})
        const token=data.data.message
        localStorage.setItem("token",token)
        toast.success("Login Success")
        navigate("/")
    }catch(err){
        toast.error(err.response.data.message)
    }
}