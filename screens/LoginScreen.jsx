import { View, Text, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated'
import PostHook from '../customHooks/PostHook'
import InputField from '../components/InputField'

export default function LoginScreen({ navigation }) {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    console.log('home login')
    const { loginHook } = PostHook()

    useEffect(() => {
        console.log('useeffect home login')
    }, [email, password])

    useEffect(() => {
        console.log('useeffect home login 2')
    }, [])

    return (
        <View className='bg-white flex-1'>
            {/* <StatusBar style="light"/> */}
            <Image className='h-[860] w-full absolute' source={require('../assets/images/background.png')} />

            {/* lights */ console.log('home login return')}
            <View className='flex-row justify-around'>
                <Animated.Image
                    entering={FadeInUp.springify().damping(5).mass(10)}
                    className='h-[200] w-[80]' source={require('../assets/images/light.png')} />

                <Animated.Image
                    entering={FadeInDown.springify().delay(100).damping(5).mass(10)}
                    className='h-[160] w-[65]' source={require('../assets/images/light.png')} />
            </View>

            {/* title and form */}
            <View className='pt-4'>
                {/* title */}
                <View className='items-center mt-10'>
                    <Animated.Text entering={FadeInDown.springify().damping(10).mass(4)} className='text-white font-bold tracking-wider text-5xl'>
                        LogIn
                    </Animated.Text>
                </View>

                {/* form */}
                <View className='items-center mx-6 space-y-4 pt-40'>

                    <InputField  text={email} setText={setEmail} delay={0} p_text='Email' />

                    <InputField text={password} setText={setPassword} delay={200} p_text='Password' />

                    <Animated.View entering={FadeInDown.delay(400).springify().damping(10).mass(3)}
                        className='w-full'>
                        <TouchableOpacity
                            className='bg-sky-400 p-4 rounded-2xl'
                            onPress={() => loginHook(email, password)}
                        >
                            <Text className='text-xl font-bold text-white text-center'>
                                LogIn
                            </Text>
                        </TouchableOpacity>
                    </Animated.View>

                    <Animated.View entering={FadeInDown.delay(600).springify().damping(10).mass(3)}
                        className='flex-row'>
                        <Text>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text className='text-sky-600'>SignUp</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>

            </View>
        </View>
    )
}