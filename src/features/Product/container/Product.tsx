import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { ProductNavProps } from '..'
import { useRoute } from '@react-navigation/native'
import { Button } from 'react-native-paper'
import CounterButton from '../components/CounterButton'
import { Rating } from 'react-native-ratings'

const Product = () => {
  const { params } = useRoute<ProductNavProps>()
  const ratingCompleted = (rating: number) => {
    console.log("Rating is: " + rating)
  }
  const processProductName = () => {
    const { productName } = params
    const str = productName.split("-")
    return str
  }


  return (
    <View style={{ flex: 1, justifyContent: 'center', }}>
      <View style={{ flex: 2 }}>
        <Image source={{ uri: params.productImage }} style={{ width: "100%", height: "90%" }} />
      </View>
      <View style={{ height: '25%', backgroundColor: 'white', borderTopLeftRadius: 25, borderTopRightRadius: 25, padding: '5%', justifyContent: 'space-between' }}>
        <View>
          {/* product name and discription */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ color: 'black', fontSize: 24, fontWeight: '600' }}>{processProductName()[0]}</Text>
            {/* <Text style={{ color: 'black' }}>Rating</Text> */}
            <Rating
              type='custom'
              onFinishRating={(rating: number) => ratingCompleted(rating)}
              imageSize={20}
              ratingColor='black'
              ratingBackgroundColor='#A8A8A8'
              tintColor='white'
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ color: 'black' }}>{processProductName()[1]}</Text>
            <Text style={{ color: 'black' }}>Rating</Text>
          </View>

        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* button */}
          <Text style={{ color: 'black', fontSize: 24, fontWeight: '600',flex:1 }}>$ {params.productPrice}</Text>
          <View style={{flex:2,flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
            <CounterButton buttonContainerStyle={{marginRight:'5%'}} buttonWidth={40} buttonheight={38} buttonRadius={15} buttonColor={"white"} />
            <Button icon={"cart"} mode='contained' onPress={() => console.log('buy')}>Cart</Button>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Product