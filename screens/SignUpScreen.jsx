import { View, Text, Image, StatusBar, TextInput, TouchableOpacity, Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'
import PostHook from '../customHooks/PostHook'
import InputField from '../components/InputField'


export default function SignUpScreen({ navigation }) {

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    console.log('fName : ', firstName)

    const { signupHook } = PostHook()

    return (
        <View className='bg-white flex-1'>
            {/* <StatusBar style="light"/> */}
            <Image className='h-[800] w-full absolute' source={require('../assets/images/background.png')} />

            {/* lights */}
            <View className='flex-row justify-around '>
                <Animated.Image
                    entering={FadeInUp.springify().damping(5).mass(10)}
                    className='h-[200] w-[80]' source={require('../assets/images/light.png')} />

                <Animated.Image
                    entering={FadeInDown.springify().delay(100).damping(5).mass(10)}
                    className='h-[160] w-[65]' source={require('../assets/images/light.png')} />
            </View>

            {/* title and form */}
            <View  className='pt-4 flex-1'>
                {/* title */}
                <View className='items-center mt-10'>
                    <Animated.Text entering={FadeInDown.springify().damping(10).mass(4)} className='text-white font-bold tracking-wider text-5xl'>
                        SignUp
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
                            onPress={() => signupHook(firstName,lastName,email,password)}
                        >
                            <Text className='text-xl font-bold text-white text-center'>
                                SignUp
                            </Text>
                        </TouchableOpacity>
                    </Animated.View>

                    <Animated.View entering={FadeInDown.delay(1000).springify().damping(10).mass(3)}
                        className='flex-row justify-center pb-0'>
                        <Text>Already have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
                            <Text className='text-sky-600'>LogIn</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>

            </View>

            {/* <View>
                <Animated.View entering={FadeInDown.delay(800).springify().damping(10).mass(3)}
                    className='flex-row justify-center pb-20'>
                    <Text>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
                        <Text className='text-sky-600'>LogIn</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View> */}

        </View>
    )
}