import { Platform, StyleSheet } from 'react-native'
import React from 'react'
import { DefaultTheme, Provider as PaperProvider, configureFonts } from 'react-native-paper';
import AppContainer from './navigation/index'
import store from './store/'
import { Provider } from 'react-redux';

const fontConfig = {
  customVariant: {
    fontFamily: Platform.select({
      web: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      ios: 'System',
      default: 'sans-serif',
    }),
    fontWeight: '400',
    letterSpacing: 0.5,
    lineHeight: 22,
    fontSize: 20,
  }
};


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',
    secondary: '#8C8C8C',
    tertiary: '#A04F9B',
    background: '#FFFF'
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