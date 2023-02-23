import { Navigate } from "react-router-dom";
import { Authorization } from "../components/SignIn";
import { useAppSelector } from "../hooks/hooks";


export const Auth = ({children}) => {
    
 const token = useAppSelector((state) => state.user.user.token)

 if(!token){
    return(
        
       <Navigate to='/' element={<Authorization/>} /> 
       
    )  
 }
    return children
}
