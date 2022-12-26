import { Platform, StyleSheet } from 'react-native'
import React from 'react'
import { DefaultTheme, Provider as PaperProvider, configureFonts } from 'react-native-paper';
import AppContainer from './navigation/index'
import store from './store/'
import { Provider } from 'react-redux';

const fontConfig = {
  regular: {
    fontFamily:'Roboto',
    fontWeight: 'Roboto-Regular',
  },
  medium: {
    fontFamily:'Roboto',
    fontWeight: 'Roboto-Medium',
  },
  light: {
    fontFamily:'Roboto',
    fontWeight: 'Roboto-Light',
  },
  thin: {
    fontFamily:'Roboto',
    fontWeight: 'Roboto-Thin',
  },
  bold:{
    fontFamily:'Roboto',
    fontWeight: 'Roboto-Bold',
  },
  italic:{
    fontFamily:'Roboto',
    fontWeight: 'Roboto-Italic',
  }

};



const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',
    primaryContainer:'#EBEAEF',
    secondary: '#8C8C8C',
    tertiary: '#A04F9B',
    background: '#FFF'
  },
  //@ts-ignore
  fonts: configureFonts({ config: fontConfig })
}

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <AppContainer />
      </PaperProvider>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})