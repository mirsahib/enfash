import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AuthNavigator from './AuthNavigator'

const index = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthNavigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default index