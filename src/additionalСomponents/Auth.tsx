import { Navigate } from "react-router-dom";
import { Authorization } from "../components/SignIn";
import { useAppSelector } from "../hooks/hooks";
import {FC} from 'react'

interface isAuth {
   children: JSX.Element
}

export const Auth: FC <isAuth> = ({children}) => {

   const isAuth = useAppSelector((state) => state.user.isAuth);

   if(!isAuth){
      return(
         <Navigate to='/'/> 
      )  
   }
   return children
}
