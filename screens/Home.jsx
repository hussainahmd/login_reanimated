import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Home() {
    console.log('Top Area')

    const [font, setFont] = useState(14)

    const onPress = () => {
        console.log('Button onPress called')
        setFont(font + 2)
    }

    useEffect(() => {
      console.log('This is simple useEffect')
    })

    useEffect(() => {
        console.log('This is useEffect with []')
    }, [])

    useEffect(() => {
        console.log('This is useEffect with [font]')
    }, [font])
    
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        {console.log('I am in return')}
      <Text style={{fontSize:font}}>Font size : {font}</Text>
      <Button title='press me' onPress={onPress}/>
    </View>
  )
}