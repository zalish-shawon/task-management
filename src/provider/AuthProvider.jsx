/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../FirebaseConfig";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const auth = getAuth(app);

 const createAccountWithPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
 }


 const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
 }

 //google login
 const googleProvider = new GoogleAuthProvider

 const googleLogin = () => {
    return signInWithPopup(auth, googleProvider)
 }

//  const fbProvider = new FacebookAuthProvider

//  const fbLogin =() => {
//    return signInWithPopup(auth, fbProvider);
//  }

 const logOut = () => {
    setLoading(true)
   return signOut(auth)
 }



 useEffect(() => {

  const unsubscribe =  onAuthStateChanged(auth, (user) => {
        setUser(user)
        setLoading(false)
    });
    return () => {
        unsubscribe()
    }
 }, [])
 

 const authInfo = {
    createAccountWithPassword,
    loginUser,
    user,
    logOut,
    googleLogin,
    loading,
    
    
    
 }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;