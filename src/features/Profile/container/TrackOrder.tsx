import { View } from 'react-native'
import React from 'react'
import { Text, useTheme } from 'react-native-paper'
import Layout from '../wrapper/Layout'
import IconComponent from '@components/IconComponent'
import Dash from '../components/Dash'
import TrackOrderStatus from '../components/TrackOrderStatus'

const TrackOrder = () => {
  const theme = useTheme()

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background,
      margin: '5%',
      paddingTop: '5%',
      paddingHorizontal: '5%'
    }}>
      <View style={{ alignItems: 'center' }}>
        <Text variant='headlineSmall'>Your Order:</Text>
        <Text variant='titleLarge' style={{color:theme.colors.secondary}}>#124</Text>
      </View>
      <View style={{ marginVertical: '5%' }}>
        <TrackOrderStatus
          title='Order Created'
          message='Received new order'
          icon='radio-button-on'
        />
        <Dash />
        <TrackOrderStatus
          title='Order Created'
          message='Received new order'
          icon='radio-button-on'
        />       
        <Dash />
        <TrackOrderStatus
          title='Order Confirmed'
          message='Order has been confirmed'
          icon='radio-button-on'
        />        
        <Dash />
        <TrackOrderStatus
          title='Shipped'
          message='Estimated arrival at 22 June 2022'
          icon='radio-button-off'
        />        
        <Dash />
        <TrackOrderStatus
          title='Out for Delivery'
          message='Estimated arrival at 22 June 2022'
          icon='radio-button-off'
        />
        <Dash />
        <TrackOrderStatus
          title='Delivered'
          message='Estimated arrival at 22 June 2022'
          icon='radio-button-off'
        />
      </View>
    </View>
  )
}

export default Layout(TrackOrder)