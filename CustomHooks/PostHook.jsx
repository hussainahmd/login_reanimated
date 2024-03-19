import { useEffect, useState } from "react"
import axios from "axios"
import { Alert } from "react-native"

const GLOBAL = require("../Globals")

export default function PostHook() {
    const [login, setLogin] = useState(false)
    const [signup, setSignup] = useState(false)

    console.log('post hook home')
    const loginHook = (email, password) => {

        console.log('login hook')

        const signInParams = {
            email: email,
            password: password,
        }

        let finalURL = GLOBAL.BASE_URL + 'login'

        axios
            .post(finalURL, signInParams, {
                headers: {
                    Accept: "application/json",
                },
            })
            .then((response) => {
                console.log("We are Successful ==", response.data)
                setLogin(true)
                Alert.alert('Login Successful')
            })
            .catch((error) => {
                console.log('What is error == ', error.response.data.message)
                Alert.alert(error.response.data.message)
                setLogin(false)
            })
    }

    const signupHook = (fName, lName, email, password) => {
        const signUpParams = {
            "firstName": fName,
            "lastName": lName,
            "email": email,
            "password": password,
            "confirmPassword": password,
            "signUpType": "EMAIL"
        }

        let finalURL = GLOBAL.BASE_URL + 'signup'

        axios
            .post(finalURL, signUpParams, {
                headers: {
                    Accept: "application/json",
                },
            })
            .then((response) => {
                console.log("We are Successful ==", response.data)
                setSignup(true)
                Alert.alert('SignUp Successful')
            })
            .catch((error) => {
                console.log('What is error == ', error.response.data.message)
                Alert.alert(error.response.data.message)
                setSignup(false)
            })

    }

    console.log('post hook home return')
    return { loginHook, signupHook }
}