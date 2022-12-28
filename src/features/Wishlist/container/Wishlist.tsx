import { View } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import CardComponent from '../components/CardComponent'

const Wishlist = () => {
  const theme = useTheme()

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: theme.colors.primaryContainer }}>
      <View style={{ flex: 1, paddingHorizontal: '5%', paddingTop: '5%' }}>
        <CardComponent/>
      </View>
    </SafeAreaView>
  )
}

export default Wishlist