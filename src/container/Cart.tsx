import { View, Text, Image, TextInput, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import ItemList from '../components/ItemList'
import { Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/AntDesign'
const data = [
    {
        "id": "08b37fd4-c278-45df-bbf8-87969d2d6ddb",
        "productName": "Star Fruit",
        "productPrice": 64,
        "productImage": "http://dummyimage.com/151x100.png/ff4444/ffffff"
    }, {
        "id": "6c1e2b1c-817c-43fc-bef6-1bbb9c23fbc0",
        "productName": "Yeast Dry - Fermipan",
        "productPrice": 80,
        "productImage": "http://dummyimage.com/182x100.png/5fa2dd/ffffff"
    }, {
        "id": "4e5d1c99-b4a3-4911-a593-4a4e648fc1fd",
        "productName": "Soup - Campbells Chili Veg",
        "productPrice": 70,
        "productImage": "http://dummyimage.com/200x100.png/5fa2dd/ffffff"
    },
]
const { width, height } = Dimensions.get('screen')

const Cart = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ height: '35%',marginTop:'5%' }}>
                {/* shopping list */}
                <FlatList data={data} keyExtractor={item => item.id} renderItem={(item) => <ItemList />} />
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity style={{
                        width: 25,
                        height: 25,
                        borderRadius: 25/2,
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
                    <Text style={{ color: 'black' }}>Sub total</Text>
                    <Text style={{ color: 'black' }}>$ 19.99</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'black' }}>Shipping</Text>
                    <Text style={{ color: 'black' }}>$ 1.99</Text>
                </View>
                <View style={{ width: '100%', height: 1, backgroundColor: 'black', marginVertical: '5%' }}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'black' }}>Grand Total</Text>
                    <Text style={{ color: 'black' }}>$ 20.99</Text>
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