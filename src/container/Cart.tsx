import { View, TextInput, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import ItemList from '../components/ItemList'
import { Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/AntDesign'
import { Text } from 'react-native-paper'
import { useAppSelector } from '@store/index'

const { width, height } = Dimensions.get('screen')

const Cart = () => {
    const items = useAppSelector(state => state.shoppingCart)
    const products = items.itemList

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            {items.totalProduct!=0?<><View style={{ height: '35%', marginTop: '5%' }}>
                {/* shopping list */}
                {/*@ts-ignore*/ }
                <FlatList data={products} keyExtractor={item => item.product?.id} renderItem={(item) => <ItemList data={item.item} />} />
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={{
                            width: 25,
                            height: 25,
                            borderRadius: 25 / 2,
                            backgroundColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>
                            <Icon name='arrowdown' size={10} color='black' />
                        </TouchableOpacity>
                    </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* promocode container */}
                <View style={{ width: '80%', height: 50, backgroundColor: 'white', borderRadius: 25, paddingLeft: '5%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput placeholder='Apply Promo Code' placeholderTextColor={'black'} />
                    <Button mode='contained' onPress={() => console.log('apply code')}>Apply</Button>
                </View>
            </View>
            <View style={{ flex: 2, paddingHorizontal: '10%' }}>
                {/* bill container */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text variant='labelLarge'>Sub total</Text>
                    <Text variant='labelLarge'>$ {items.totalPrice.toFixed(2)}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text variant='labelLarge'>Shipping</Text>
                    <Text variant='labelLarge'>$ 4.99</Text>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: 'black', marginVertical: '5%' }}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text variant='labelLarge'>Grand Total</Text>
                    <Text variant='labelLarge'>$ {(items.totalPrice+4.99).toFixed(2)}</Text>
                </View>
            </View>
            <View style={{ flex: 1, paddingHorizontal: '5%' }}>
                {/* payment button */}
                <Button mode='contained' contentStyle={{ height: 60 }} >Proceed to Checkout</Button>
            </View></>:<Text variant='titleSmall'>No product </Text>}

        </View>
    )
}

export default Cart