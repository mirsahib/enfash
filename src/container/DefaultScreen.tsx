import { StyleSheet, View } from 'react-native'
import React from 'react'
import {Button, Text} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

type DefaultScreenProps={
  message:string,
  buttonText?:string
}

const DefaultScreen = (props:DefaultScreenProps) => {
  const {message,buttonText} = props
  const navigation = useNavigation()

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center' }}>
      <Text variant='titleMedium' >{message}</Text>
      {buttonText? <Button mode='outlined' onPress={()=>navigation.goBack()}>{buttonText}</Button>:""}
    </View>
  )
}

export default DefaultScreen

const styles = StyleSheet.create({})
