import { FlatList, View } from 'react-native'
import React from 'react'
import data from '@utils/OrderHistory'
import OrderCard from '../components/OrderCard'
import Layout from '@hoc/Layout'
const OrderHistory = () => {
  return (
    <View style={{flex:1,paddingHorizontal:'5%',paddingTop:'5%'}}>
      <FlatList
        data={data}
        keyExtractor={item=>item.orderId}
        renderItem={item=>(<OrderCard {...item.item}/>)}
      />
    </View>
  )
}

export default Layout(OrderHistory)