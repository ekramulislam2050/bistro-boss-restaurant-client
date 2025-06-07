import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import useAxiosPublic from "../Hook/useAxiosPublic";


export const AuthContext = createContext(null)
const axiosPublic = useAxiosPublic()
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserInFo = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //         setUser(currentUser)

    //         if (currentUser) {
    //             const userInfo = {
    //                 email: currentUser.email
    //             }
    //             axiosPublic.post("/jwt", userInfo)
    //                 .then((res) => {

    //                     if (res.data.token) {
    //                         localStorage.setItem("access_token", res.data.token)
    //                     } else {
    //                         localStorage.removeItem("access_token")
    //                     }
    //                 })
    //                   setLoading(false)
    //         }

    //     })
    //     return () => unsubscribe()
    // }, [axiosPublic])
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)

            if (currentUser) {
                const userInfo = { email: currentUser.email }

                axiosPublic.post("/jwt", userInfo)
                    .then((res) => {
                        if (res.data.token) {
                            localStorage.setItem("access_token", res.data.token)
                        } else {
                            localStorage.removeItem("access_token")
                        }
                    })
                    .catch((err) => {
                        console.error("JWT Error:", err)
                        localStorage.removeItem("access_token")
                    })
                    .finally(() => {
                        setLoading(false) 
                    })

            } else {
                
                localStorage.removeItem("access_token")
                setLoading(false)
            }
        })

        return () => unsubscribe()
    }, [axiosPublic])


    const userInfo = {
        auth,
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserInFo,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;