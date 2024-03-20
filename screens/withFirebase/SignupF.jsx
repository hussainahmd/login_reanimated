import { View, Text, Image, StatusBar, TextInput, TouchableOpacity, Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'

import { InputField, ImageBackground, LightsView } from '../../components/components'
import onPressSignup from '../../firebase/functions'


export default function SignupF({ navigation }) {

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <View className='bg-white flex-1'>
            {/* <StatusBar style="light"/> */}
            <ImageBackground height={800} />

            <LightsView />

            {/* title and form */}
            <View className='pt-4 flex-1'>
                {/* title */}
                <View className='items-center mt-10'>
                    <Animated.Text entering={FadeInDown.springify().damping(10).mass(4)} className='text-white font-bold tracking-wider text-5xl'>
                        SignUp_f
                    </Animated.Text>
                </View>

                {/* form */}
                <View className='items-center mx-6 space-y-3 mt-24'>

                    <InputField text={firstName} setText={setFirstName} delay={0} p_text='First Name' />

                    <InputField text={lastName} setText={setLastName} delay={200} p_text='Last Name' />

                    <InputField text={email} setText={setEmail} delay={400} p_text='Email' />

                    <InputField text={password} setText={setPassword} delay={600} p_text='Password' />

                    <Animated.View entering={FadeInDown.delay(800).springify().damping(10).mass(3)}
                        className='w-full'>
                        <TouchableOpacity
                            className='w-full bg-sky-400 p-4  rounded-2xl'
                            onPress={() => onPressSignup(email, password)}
                        >
                            <Text className='text-xl font-bold text-white text-center'>
                                SignUp
                            </Text>
                        </TouchableOpacity>
                    </Animated.View>

                    <Animated.View entering={FadeInDown.delay(1000).springify().damping(10).mass(3)}
                        className='flex-row justify-center pb-0'>
                        <Text>Already have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('LoginF')}>
                            <Text className='text-sky-600'>LogIn</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>

            </View>

        </View>
    )
}