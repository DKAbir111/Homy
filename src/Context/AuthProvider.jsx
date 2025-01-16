import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import AuthContext from "./AuthContext";
import auth from "../Firebase/firebase.init";
import { useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();

    //Attach the observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            //set jwt
            if (currentUser?.email) {
                const user = {
                    email: currentUser.email,
                    name: currentUser.displayName,
                }
                axios.post('http://localhost:5001/api/jwt', user)
                    .then(res => {
                        localStorage.setItem('access-token', res.data.token)
                    })
                setLoading(false)
            }
        })
        return () => unsubscribe()
    }, [])

    //create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);

    }

    //login with email and password
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // sign in with google

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    //logOut
    const logOut = () => {
        return signOut(auth)
    }
    const authInfo = {
        login,
        createUser,
        user,
        loading,
        googleSignIn,
        logOut

    };
    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    )
}
