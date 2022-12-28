import { Image, View } from 'react-native'
import React from 'react'
import { Button, Card, IconButton, Text, useTheme } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import IconComponent from '@components/IconComponent'
import CardComponent from '../components/CardComponent'

const Wishlist = () => {
  const theme = useTheme()
  const handleNav = () => {
    console.log('go to product')
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: theme.colors.primaryContainer }}>
      <View style={{ flex: 1, paddingHorizontal: '5%', paddingTop: '5%' }}>
        <CardComponent/>
      </View>
    </SafeAreaView>
  )
}

export default Wishlist