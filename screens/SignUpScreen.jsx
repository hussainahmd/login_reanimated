import { View, Text, Image, StatusBar, TextInput, TouchableOpacity, Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SignUpScreen({ navigation }) {

    const height = Dimensions.get("window").height

    return (
        <View className='bg-white h-full w-full pt-0'>
            {/* <StatusBar style="light"/> */}
            <Image className='h-[860] w-full absolute' source={require('../assets/images/background.png')} />

            {/* lights */}
            <View className='flex-row justify-around w-full '>
                <Animated.Image
                    entering={FadeInUp.springify().damping(5).mass(10)}
                    className='h-[225] w-[90]' source={require('../assets/images/light.png')} />

                <Animated.Image
                    entering={FadeInDown.springify().delay(100).damping(5).mass(10)}
                    className='h-[160] w-[65]' source={require('../assets/images/light.png')} />
            </View>

            {/* title and form */}
            <View className='h-full w-full flex justify-around pt-4 pb-40'>
                {/* title */}
                <View className='flex items-center pb-0'>
                    <Animated.Text entering={FadeInDown.springify().damping(10).mass(4)} className='text-white font-bold tracking-wider text-5xl'>
                        SignUp
                    </Animated.Text>
                </View>

                {/* form */}
                <View className='flex items-center mx-6 space-y-5 pt-12'>
                    <Animated.View entering={FadeInDown.springify().damping(10).mass(3)}
                        className='bg-black/5 p-4 rounded-2xl w-full'>
                        <TextInput placeholder='Username' placeholderTextColor={'gray'} />
                    </Animated.View>

                    <Animated.View entering={FadeInDown.delay(200).springify().damping(10).mass(3)}
                        className='bg-black/5 p-4 rounded-2xl w-full'>
                        <TextInput placeholder='Email' placeholderTextColor={'gray'} />
                    </Animated.View>

                    <Animated.View entering={FadeInDown.delay(400).springify().damping(10).mass(3)}
                        className='bg-black/5 p-4 rounded-2xl w-full mb-2'>
                        <TextInput placeholder='Password' placeholderTextColor={'gray'} secureTextEntry />
                    </Animated.View>

                    <Animated.View entering={FadeInDown.delay(600).springify().damping(10).mass(3)}
                        className='w-full'>
                        <TouchableOpacity className='w-full bg-sky-400 p-4  rounded-2xl mb-0'>
                            <Text className='text-xl font-bold text-white text-center'>
                                SignUp
                            </Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>

                <Animated.View entering={FadeInDown.delay(800).springify().damping(10).mass(3)}
                    className='flex-row justify-center pb-20'>
                    <Text>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
                        <Text className='text-sky-600'>LogIn</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </View>
    )
}