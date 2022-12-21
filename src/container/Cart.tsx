import { View,  Image, TextInput, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import ItemList from '../components/ItemList'
import { Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/AntDesign'
import { Text } from 'react-native-paper'
const data = [
    {
        "id": "1",
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": "2",
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },
    {
        "id": "3",
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    },
]
const { width, height } = Dimensions.get('screen')

const Cart = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ height: '35%', marginTop: '5%' }}>
                {/* shopping list */}
                <FlatList data={data} keyExtractor={item => item.id} renderItem={(item) => <ItemList data={item.item}/>} />
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
                    <Text variant='labelLarge'>$ 19.99</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text variant='labelLarge'>Shipping</Text>
                    <Text variant='labelLarge'>$ 1.99</Text>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: 'black', marginVertical: '5%' }}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text variant='labelLarge'>Grand Total</Text>
                    <Text variant='labelLarge'>$ 20.99</Text>
                </View>
            </View>
            <View style={{ flex: 1, paddingHorizontal: '5%' }}>
                {/* payment button */}
                <Button mode='contained' contentStyle={{ height: 60 }} >Proceed to Checkout</Button>
            </View>

        </View>
    )
}

export default Cart