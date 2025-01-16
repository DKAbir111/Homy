import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import AuthContext from "./AuthContext";
import auth from "../Firebase/firebase.init";
import { useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";


export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic()
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
                axiosPublic.post('/jwt', user)
                    .then(res => {
                        localStorage.setItem('access-token', res.data.token)
                        setLoading(false)
                    })

            }
            else {
                localStorage.removeItem('access-token')
                setLoading(false)
            }
        })

        return () => unsubscribe()
    }, [axiosPublic])

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

    //store user to database
    const storeUser = (name, email, photo) => {
        const userInfo = {
            email: email,
            name: name,
            photo: photo,
            role: 'user'
        }

        axiosPublic.post('/user', userInfo)
            .then(res => {
                if (res.data.insertedId) {
                    console.log(res.data.insertedId, "store in database")
                }
            })
            .catch(err => console.log(err))
    }

    const authInfo = {
        login,
        createUser,
        user,
        loading,
        googleSignIn,
        logOut,
        storeUser

    };
    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    )
}
