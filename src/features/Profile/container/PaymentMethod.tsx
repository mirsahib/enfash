import { View } from 'react-native'
import React from 'react'
import { Button, useTheme } from 'react-native-paper'
import ProfileAction from '../components/ProfileAction'
import Layout from '@hoc/Layout'
const PaymentMethod = () => {
  const theme = useTheme()
  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background,
      marginHorizontal: '5%',
      marginVertical: '5%',
      padding: '5%',
      justifyContent: 'space-between'
    }}>
      <View>
        <ProfileAction onPress={() => { }} 
          iconDirectory='AntDesign' 
          actionIcon='creditcard' 
          actionText='William Justin'
          actionSecondaryText='4456 1235 7830 6341'
          actionIconSecondary='eyeo'
          actionIconSecondaryDirectory='AntDesign'
          />
      </View>
      <View>
        <Button mode='text' icon={"plus"}>Add New Card</Button>
      </View>
    </View>
  )
}

export default Layout(PaymentMethod)