import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AuthNavigator from './AuthNavigator'
import HomeNavigator from './HomeNavigator'
import MainNavigator from './MainNavigator'
const index = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <AuthNavigator/> */}
        {/* <HomeNavigator/> */}
        <MainNavigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default index