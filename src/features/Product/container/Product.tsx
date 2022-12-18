import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { ProductNavParams, ProductNavProps } from '..'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Button } from 'react-native-paper'
import CounterButton from '../components/CounterButton'
import { Rating } from 'react-native-ratings'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const Product = () => {
  const { params } = useRoute<ProductNavProps>()
  const ratingCompleted = (rating: number) => {
    console.log("Rating is: " + rating)
  }
  const navigation = useNavigation<NativeStackNavigationProp<ProductNavParams>>()
  const handleNavigation = () => {
    navigation.navigate('Cart')
  }


  return (
    <View style={{ flex: 1, justifyContent: 'center', }}>

      <Image source={{ uri: params.image }} style={{ flex: 2, width: "100%", height: "90%", marginBottom: '5%' }} />

      <View style={{ height: '30%', backgroundColor: 'white', borderTopLeftRadius: 25, borderTopRightRadius: 25, padding: '5%', justifyContent: 'space-between' }}>
        <View>
          {/* product name and discription */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Text style={{ color: 'black', fontSize: 24, fontWeight: '600', maxWidth: '70%' }} adjustsFontSizeToFit numberOfLines={3}>{params.title}</Text>
            <View>
              <Rating
                type='custom'
                onFinishRating={(rating: number) => ratingCompleted(rating)}
                imageSize={20}
                ratingColor='black'
                ratingBackgroundColor='#A8A8A8'
                tintColor='white'
              />
              <Text style={{ color: 'black' }}>Rating</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* button */}
          <Text style={{ color: 'black', fontSize: 24, fontWeight: '600', flex: 1 }}>$ {params.price}</Text>
          <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
            <CounterButton buttonContainerStyle={{ marginRight: '5%' }} buttonWidth={40} buttonheight={38} buttonRadius={15} buttonColor={"white"} />
            <Button icon={"cart"} mode='contained' onPress={() => handleNavigation()}>Cart</Button>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Product