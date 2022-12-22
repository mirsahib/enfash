import { View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { ProductNavProps } from '..'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Button, Text, useTheme } from 'react-native-paper'
import CounterButton from '@components/CounterButton'
import { Rating } from 'react-native-ratings'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { MainNavigationParams } from '@navigation/navigationTypes'
import { addcart, removeFromCart } from '@store/cart'
import { useAppDispatch, useAppSelector } from '@store/index'


const Product = () => {
  const { params } = useRoute<ProductNavProps>()
  const navigation = useNavigation<NativeStackNavigationProp<MainNavigationParams>>()
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const products = useAppSelector(state => state.shoppingCart.itemList)
  const product = products.find(item => item.product?.id === params.id)

  const ratingCompleted = (rating: number) => {
    console.log("Rating is: " + rating)
  }
  const handleNavigation = () => {
    navigation.navigate('CartNav', { screen: 'Cart' })
  }
  const addItem = () => {
    dispatch(addcart(params))
  }
  const removeItem = () => {
    dispatch(removeFromCart(params))
  }


  return (
    <View style={{ flex: 1, justifyContent: 'center', }}>
      <Image source={{ uri: params.image }} style={{ flex: 1 }} />
      <View style={{ flex: 1, backgroundColor: 'white', borderTopLeftRadius: 25, borderTopRightRadius: 25, padding: '5%', justifyContent: 'space-between' }}>
        <View style={{ marginBottom: '2%' }}>
          {/* product name and discription */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Text variant='titleLarge' style={{ flex: 1, fontWeight: '700' }} adjustsFontSizeToFit numberOfLines={3}>{params.title}</Text>
            <View>
              <Rating
                type='custom'
                onFinishRating={(rating: number) => ratingCompleted(rating)}
                imageSize={20}
                ratingColor='black'
                ratingBackgroundColor='#A8A8A8'
                tintColor='white'
                showRating
                ratingCount={5}
                startingValue={params.rating.rate}
                style={{}}
              />
              <Text variant='bodySmall'>{params.rating.count} reviews</Text>
            </View>
          </View>
        </View>
        <ScrollView >
          <Text adjustsFontSizeToFit variant='bodyMedium'>{params.description}</Text>
        </ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '2%' }}>
          {/* button */}
          <Text variant='headlineSmall' style={{ fontWeight: '700' }}>$ {params.price}</Text>
          <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
            <CounterButton defaultValue={product ? product?.count : 0} buttonRightAction={() => addItem()} buttonLeftAction={() => removeItem()} buttonContainerStyle={{ marginRight: '5%' }} buttonWidth={40} buttonheight={38} buttonRadius={15} buttonColor={"white"} />
            <Button icon={"cart"} mode='contained' onPress={() => handleNavigation()}>Cart</Button>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Product