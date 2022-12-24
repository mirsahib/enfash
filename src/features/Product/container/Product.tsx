import { View, Image, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { ProductNavProps } from '..'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Avatar, Button, Text, useTheme } from 'react-native-paper'
import { Rating } from 'react-native-ratings'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { MainNavigationParams } from '@navigation/navigationTypes'
import { addToCartOnce } from '@store/cart'
import { useAppDispatch, useAppSelector } from '@store/index'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { SafeAreaView } from 'react-native-safe-area-context'

const { width } = Dimensions.get('screen')

const Product = () => {
  const { params } = useRoute<ProductNavProps>()
  const navigation = useNavigation<NativeStackNavigationProp<MainNavigationParams>>()
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const products = useAppSelector(state => state.shoppingCart.itemList)
  const product = products.find(item => item.product?.id === params.id)

  
  const handleNavigation = () => {
    navigation.navigate('CartNav', { screen: 'Cart' })
  }
  const addItem = () => {
    dispatch(addToCartOnce(params))
  }
  


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', }}>
      <Image source={{ uri: params.image }} style={{ flex: 1, alignSelf: 'center', width: '90%' }} />
      {/* product name and discription */}
      <ScrollView style={{ flex: 1, backgroundColor: 'white', borderTopLeftRadius: 25, borderTopRightRadius: 25, padding: '5%' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Text variant='labelLarge' style={{ flex: 1, paddingRight: '5%' }} adjustsFontSizeToFit numberOfLines={3}>{params.title}</Text>
          <Icon name="favorite-outline" size={24} color={theme.colors.primary} />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Rating
            type='custom'
            ratingColor={theme.colors.primary}
            ratingBackgroundColor={theme.colors.secondary}
            tintColor={"white"}
            imageSize={20}
            ratingCount={1}
            readonly={true}
            startingValue={params.rating.rate}
            style={{ alignItems: 'flex-start', marginRight: '1%' }}
          />
          <Text>{params.rating.rate}</Text>
        </View>

        <View style={{ marginVertical: '5%' }}>
          <Text variant='titleLarge' style={{ fontWeight: '700', marginBottom: '5%' }}>${params.price}</Text>
          <Text variant='titleMedium' style={{ marginBottom: '5%' }}>Description</Text>
          <Text style={{ color: theme.colors.secondary, marginBottom: '5%' }}>{params.description}</Text>
          <Button mode='contained' onPress={()=>addItem()} icon='cart'>{product?"ITEM ADDED":"ADD TO CART"}</Button>
        </View>
        <View >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text variant='titleMedium'>Reviews ({params.rating.count})</Text>
            <Text style={{color:theme.colors.tertiary}}>View All</Text>
          </View>
          <View style={{ height: 2, backgroundColor: theme.colors.primary }}></View>
          <View style={{ marginVertical: '5%', padding: '5%' }}>
            {/* review container */}
            <View style={{ flexDirection: 'row', marginBottom: '2%' }}>
              <Avatar.Text size={40} label='CW' />
              <View style={{ alignItems: 'flex-start', marginLeft: '5%' }}>
                <Text>Cameroon Williamson</Text>
                <Rating
                  type='custom'
                  ratingColor={theme.colors.primary}
                  ratingBackgroundColor={theme.colors.secondary}
                  tintColor={"white"}
                  imageSize={20}
                  ratingCount={5}
                  readonly={true}
                />
              </View>
            </View>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente reiciendis accusamus quis dolorem quidem incidunt nesciunt quas deserunt minima pariatur suscipit, quos unde commodi alias repellat? Hic consequuntur quis animi.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Product