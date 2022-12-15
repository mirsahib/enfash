import { View, Text } from 'react-native'
import React from 'react'
import styles from '../styles/main'
import { useTheme } from 'react-native-paper'

const Cart = () => {
  const theme = useTheme()

  return (
    <View style={styles.container}>
      <Text style={{color:theme.colors.primary}}>Cart</Text>
    </View>
  )
}

export default Cart