import { Image, View } from 'react-native'
import React from 'react'
import { Text, useTheme } from 'react-native-paper'
import Layout from '@hoc/Layout'
import { OrderDetailsRouteProps } from '@navigation/utils/NavigationTypes'
import { useRoute } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler'
import OrderDetailsCard from '../components/OrderDetailsCard'

const OrderDetails = () => {
  const { params } = useRoute<OrderDetailsRouteProps>()
  const {orderId,orderStatus,total,productList,orderDate,address} = params
  const theme = useTheme()
  return (
    <View style={{ flex: 1, paddingHorizontal: '5%', paddingTop: '5%' }}>
      <View style={{ flex: 1, backgroundColor: theme.colors.background, borderRadius: 10, padding: "5%", justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <Image source={require('@assets/icons/basket.png')} resizeMode={"contain"} style={{
            width: 80,
            height: 80,
          }} />
          <View>
            <Text variant='titleLarge'> Order {orderStatus}</Text>
            <Text variant='titleLarge'> Total: ${total}</Text>
          </View>
        </View>
        <View>
          <Text>
            <Text variant='titleSmall'>Address: </Text>
            <Text>{address}</Text>
          </Text>
        </View>
        <View>
          <View style={{ height: 1, backgroundColor: theme.colors.primaryContainer, marginBottom: '1%' }}></View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text variant='titleSmall'>#{orderId}</Text>
            <Text style={{ color: theme.colors.tertiary }} variant="titleSmall">Report Issue</Text>
          </View>
          <Text variant='titleSmall'>{orderDate}</Text>
        </View>
      </View>
      <View style={{ flex: 2 }}>
        <FlatList
          data={productList}
          keyExtractor={(item)=>item.product.id}
          renderItem={(item)=><OrderDetailsCard {...item.item}/>}
        />
      </View>
    </View>
  )
}

export default Layout(OrderDetails)