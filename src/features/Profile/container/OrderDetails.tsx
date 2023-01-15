import { View } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper'
import Layout from '@hoc/Layout'
import { OrderDetailsRouteProps } from '@navigation/utils/NavigationTypes'
import { useRoute } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler'
import OrderDetailsCard from '../components/OrderDetailsCard'
import OrderDetailsCardHeader from '../components/OrderDetailsCardHeader'

const OrderDetails = () => {
  const { params } = useRoute<OrderDetailsRouteProps>()
  const {productList} = params
  return (
    <View style={{ flex: 1, paddingHorizontal: '5%',}}>
        <FlatList
          ListHeaderComponent={()=><OrderDetailsCardHeader {...params}/>}
          contentContainerStyle={{paddingVertical:'5%'}}
          data={productList}
          keyExtractor={(item)=>item.product.id}
          renderItem={(item)=><OrderDetailsCard {...item.item}/>}
        />
    </View>
  )
}

export default Layout(OrderDetails)