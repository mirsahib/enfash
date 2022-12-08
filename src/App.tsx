import { StyleSheet } from 'react-native'
import React from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import AppContainer from './navigation/index'
const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:'black',
    secondary:'#BCC1BA',
  }
}

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <AppContainer />
    </PaperProvider>
  )
}

export default App

const styles = StyleSheet.create({})