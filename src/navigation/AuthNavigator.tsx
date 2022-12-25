import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthScreens from '@features/Auth'
import { AuthNavParams } from './utils/NavigationTypes'

const Stack = createNativeStackNavigator<AuthNavParams>()

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='SignIn' component={AuthScreens.SignIn} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={AuthScreens.Login} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default AuthNavigator