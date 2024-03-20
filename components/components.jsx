import { View, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated'


const InputField = ({ text, setText, delay, p_text }) => {

    // const [text, setText] = useState()

    return (
        <Animated.View
            entering={FadeInDown.springify().delay(delay).damping(10).mass(3)}
            className='bg-black/10 p-4 rounded-2xl w-full my-3'
        // style={{ backgroundColor:'#38bdf8'}}
        >

            <TextInput
                placeholder={p_text}
                placeholderTextColor={'gray'}
                onChangeText={setText}
                value={text}
            />

        </Animated.View>
    )
}

const ImageBackground = ({height}) => {
    return (
        <Image className={`h-[${height}] w-full absolute`} source={require('../assets/images/background.png')} />
    )
}

const LightsView = () => {
    return(
        <View className='flex-row justify-around '>
            <Animated.Image
                entering={FadeInUp.springify().damping(5).mass(10)}
                className='h-[200] w-[80]' source={require('../assets/images/light.png')} />

            <Animated.Image
                entering={FadeInDown.springify().delay(100).damping(5).mass(10)}
                className='h-[160] w-[65]' source={require('../assets/images/light.png')} />
        </View>
    )
}

export { InputField, ImageBackground, LightsView }