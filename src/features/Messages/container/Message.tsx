import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Message = () => {
  return (
    <SafeAreaView style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:'black'}}>Message</Text>
    </SafeAreaView>
  )
}

export default Message