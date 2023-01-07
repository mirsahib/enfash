import { View } from 'react-native'
import React from 'react'
import {Button, Text} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import IconComponent from '@components/IconComponent'


const DefaultScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center' }}>
      <IconComponent iconDirectory='AntDesign' name="shoppingcart" size={60} color={"black"}/>
      <Text variant='titleMedium' >Your cart is empty!</Text>
      <Text style={{textAlign:'center',margin:"5%"}}>Browse through our list of premium tier products and find the ones you need now!</Text>
      <Button mode='outlined' onPress={()=>navigation.goBack()}>Shop Now</Button>
    </View>
  )
}

export default DefaultScreen
