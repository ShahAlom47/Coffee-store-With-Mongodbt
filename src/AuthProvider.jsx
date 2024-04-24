
import{  createContext, useState } from "react";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import app from "../firebase.config";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [loading ,setLoading]=useState(true)
    // const [user,setUser]=useState(123456)

    const createUser =(email,password)=>{
        setLoading(true)
     return   createUserWithEmailAndPassword(auth, email, password)
        
    }
    const loginUser =(email,password)=>{
        setLoading(true)
     return   signInWithEmailAndPassword(auth, email, password)
        
    }

    




    const userInfo={
       
        loading,
        createUser,
        loginUser,


    
    }

    return (<>
    <AuthContext.Provider value={userInfo}>
        {children}

    </AuthContext.Provider>
    </>
       
    );
};

export default AuthProvider;