import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "./config"

export const registerUser = (username, password) => {
   return createUserWithEmailAndPassword(auth, username, password)
}

export const login = (username, password) => {
    return signInWithEmailAndPassword(auth, username, password)
}

export const logout = () => {
    return signOut(auth)
}

export const onAuthChange = (handler) => {
    return onAuthStateChanged(auth, handler)
}