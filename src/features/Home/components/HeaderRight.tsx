import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useTheme } from 'react-native-paper'
const HeaderRight = () => {
    const theme = useTheme()
  return (
    <View>
      <Icon name='bell' size={24} color={theme.colors.primary}/>
    </View>
  )
}

export default HeaderRight

const styles = StyleSheet.create({})