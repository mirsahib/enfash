import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useTheme } from 'react-native-paper'
const HeaderRight = () => {
    const theme = useTheme()
  return (
    <View style={{
      width:40,
      height:40,
      backgroundColor:theme.colors.primaryContainer,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:40/2
      }}>
      <Icon name='bell-o' size={24} color={theme.colors.primary}/>
    </View>
  )
}

export default HeaderRight

const styles = StyleSheet.create({})