import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider,getIdToken, updateProfile , signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [admin, setAdmin] = useState(false);
    const [authError, setAuthError] = useState("");
    const [loading, setLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const createUser = (email, password, name) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            setAuthError("")
            setUser(user)
            saveUser(email, name, 'POST')
        })
        .catch((error) => {
            setAuthError(error.message)
        })
        .finally(() => setLoading(false))
    }
    const loginUsingPassword = (email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password) 
        .then(result => {
            setAuthError("")
            setUser(user)
        })
        .catch((error) => {
            setAuthError(error.message)
        })
        .finally(() => setLoading(false))
    }
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            // sign in
            const user= result.user;
            saveUser(user.email, user?.displayName, 'PUT')
            setUser(user)
        })
        .catch((error) => {

        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }
            else {
                setUser({});
            }
            setLoading(false)
        })
    },[auth])

    useEffect(()=> {
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user.email])


    const Logout = () => {
        signOut(auth)
        .then(() => {
            // Sign Out
        })
        .catch((error) => {

        })
    }

    const saveUser = (email, displayName, method) => {
        const user = {email, displayName};
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }
    return {
        createUser,
        loginUsingPassword,
        signInUsingGoogle,
        Logout,
        user,
        admin,
        loading,
        authError
    }
}

export default useFirebase;