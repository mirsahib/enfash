import { View, Text, Image } from 'react-native'
import React from 'react'
import { ProductNavProps } from '..'
import { useRoute } from '@react-navigation/native'
import { Button } from 'react-native-paper'

const Product = () => {
  const { params } = useRoute<ProductNavProps>()
  return (
    <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: '5%' }}>
      <View style={{ flex: 2 }}>
        <Image source={{ uri: params.productImage }} style={{ width: "100%", height: "90%" }} />
      </View>
      <View style={{ flex: 1,backgroundColor:'white',borderTopLeftRadius:25,borderTopRightRadius:25,padding:'5%' }}>
        <View>
          {/* product name and discription */}
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text style={{color:'black'}}>{params.productName}</Text>
            <Text style={{color:'black'}}>Rating</Text>
          </View>
          <Text style={{color:'black'}}>$ {params.productPrice}</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Button mode='outlined'>+</Button>
          <Text style={{color:'black'}}>1</Text>
          <Button mode='outlined'>-</Button>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          {/* button */}
          <Button icon={"cart"} mode='outlined' onPress={() => console.log('Add to cart')}>Add to Cart</Button>
          <Button mode='contained' onPress={() => console.log('Buy')}>Buy Now</Button>
        </View>
      </View>
    </View>
  )
}

export default Product