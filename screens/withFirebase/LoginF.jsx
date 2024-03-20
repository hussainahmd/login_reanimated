import { View, Text, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated'

import { InputField, ImageBackground, LightsView } from '../../components/components'
import {onPressLogin} from '../../firebase/functions'

export default function LoginF({ navigation }) {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    
    return (
        <View className='bg-white flex-1'>

            {/* <StatusBar style="light"/> */}
            <ImageBackground height={860} />

            <LightsView />

            {/* title and form //absolute mt-40 absolute h-full w-full*/}
            <View className='pt-4'>
                {/* title */}
                <View className='items-center mt-10'>
                    <Animated.Text entering={FadeInDown.springify().damping(10).mass(4)} className='text-white font-bold tracking-wider text-5xl'>
                        LogIn_f
                    </Animated.Text>
                </View>

                {/* form */}
                <View className='items-center mx-6 space-y-4 pt-40'>

                    <InputField text={email} setText={setEmail} delay={0} p_text='Email' />

                    <InputField text={password} setText={setPassword} delay={200} p_text='Password' />

                    <Animated.View entering={FadeInDown.delay(400).springify().damping(10).mass(3)}
                        className='w-full'>
                        <TouchableOpacity
                            className='bg-sky-400 p-4 rounded-2xl'
                            onPress={() => onPressLogin(email, password)}
                        >
                            <Text className='text-xl font-bold text-white text-center'>
                                LogIn
                            </Text>
                        </TouchableOpacity>
                    </Animated.View>

                    <Animated.View entering={FadeInDown.delay(600).springify().damping(10).mass(3)}
                        className='flex-row'>
                        <Text>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignupF')}>
                            <Text className='text-sky-600'>SignUp</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>

            </View>
        </View>
    )
}