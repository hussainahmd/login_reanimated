import { View, TextInput } from 'react-native'
import React, { useState } from 'react'
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated'


const InputField = ({text, setText, delay, p_text}) => {

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

export default InputField