import { View, Text, Image } from 'react-native'
import React from 'react'
import Card from './Card'
import { FlatList } from 'react-native-gesture-handler'
const data = [{
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
}, {
    "id": "b208a9b0-2cb2-41ed-a925-6e6caa651ed6",
    "productName": "Sorrel - Fresh",
    "productPrice": 21,
    "productImage": "http://dummyimage.com/235x100.png/5fa2dd/ffffff"
}, {
    "id": "82f25189-69b9-4a55-89f2-963a7e1b8de8",
    "productName": "Juice - Apple, 1.36l",
    "productPrice": 17,
    "productImage": "http://dummyimage.com/115x100.png/5fa2dd/ffffff"
}, {
    "id": "b60318d5-317e-4b17-94eb-d3c09b369090",
    "productName": "Butter Balls Salted",
    "productPrice": 27,
    "productImage": "http://dummyimage.com/249x100.png/ff4444/ffffff"
}, {
    "id": "adc4ece5-4d1b-4f70-a403-0e48c8a3b2a4",
    "productName": "Quail - Whole, Boneless",
    "productPrice": 66,
    "productImage": "http://dummyimage.com/208x100.png/5fa2dd/ffffff"
}, {
    "id": "5caa51a7-3a50-4b54-b9c8-c81e22236592",
    "productName": "Cheese - Grie Des Champ",
    "productPrice": 69,
    "productImage": "http://dummyimage.com/140x100.png/ff4444/ffffff"
}, {
    "id": "912634eb-3b91-4c0f-8372-2f7fce24c185",
    "productName": "Soho Lychee Liqueur",
    "productPrice": 16,
    "productImage": "http://dummyimage.com/212x100.png/cc0000/ffffff"
}, {
    "id": "c2ae26ca-27a2-43cc-9d27-41eab82c18f1",
    "productName": "Sauce - Sesame Thai Dressing",
    "productPrice": 3,
    "productImage": "http://dummyimage.com/155x100.png/cc0000/ffffff"
}]



const ProductComponent = () => {
    return (
        <View style={{ flex: 3 }}>
            <FlatList
                data={data}
                numColumns={2}
                columnWrapperStyle={{ flex: 1, justifyContent: 'space-around', marginVertical: '2%', marginHorizontal: '5%' }}
                keyExtractor={(item) => item.id}
                renderItem={(item) => <Card 
                                        id={item.item.id} 
                                        productName={item.item.productName}
                                        productImage={item.item.productImage}
                                        productPrice={item.item.productPrice}
                                        />}
            />
        </View>
    )
}

export default ProductComponent