import {  toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

export const handlesuccess = (msg) =>{
    toast.success(msg,{
        position: 'top-right'
    })
}
export const handleerror = (msg) =>{
    toast.error(msg,{
        position: 'top-right'
    })
}