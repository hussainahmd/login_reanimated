import { Alert } from "react-native"
import { auth } from "./firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously } from "firebase/auth"

export const onPressSignup = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("SignUp : \n", userCredential)
            Alert.alert('SignUp successful')
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            console.log('Error Code == ', errorCode)
            console.log('Error Message == ', errorMessage)
            // ..
        })
}

export const onPressLogin = async () => {
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            console.log("Sign In : \n", userCredential.user)
            Alert.alert('SignIn successful')

        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            console.log("My Error : ", errorMessage)
            // ..
        })
}

export const onPressAnonymous = async () => {

    await signInAnonymously(auth)
        .then((userCredential) => {
            // console.log('Done',userCredential.user.stsTokenManager.accessToken)
            console.log(userCredential.user)
        })
}