import { FlatList, View } from 'react-native'
import React from 'react'
import data from '@utils/OrderHistory'
import Layout from '../wrapper/Layout'
import OrderCard from '../components/OrderCard'
const OrderHistory = () => {
  return (
    <View style={{flex:1,paddingHorizontal:'5%',paddingTop:'5%'}}>
      <FlatList
        data={data}
        keyExtractor={item=>item.orderId}
        renderItem={item=>(<OrderCard data={item.item}/>)}
      />
    </View>
  )
}

export default Layout(OrderHistory)