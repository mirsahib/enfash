import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Card from './Card'
import { FlatList } from 'react-native-gesture-handler'
import data from '../utils/data'

const catData = [
    {
        id: "1",
        category: "shoe",
    },
    {
        id: "2",
        category: "T-Shirts",
    }
]

const ProductComponent = () => {
    return (
        <View style={{ flex: 3 }}>
            <View style={{paddingHorizontal:'5%',marginVertical:'2%'}}>
                <FlatList
                    data={catData}
                    horizontal={true}
                    keyExtractor={(item) => item.id}
                    renderItem={(item) => (
                        <TouchableOpacity style={{ backgroundColor: 'white',marginHorizontal:5,padding:5,borderRadius:10 }}>
                            <Text style={{ color: 'black' }}>{item.item.category}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <FlatList
                data={data}
                numColumns={2}
                columnWrapperStyle={{ flex: 1, justifyContent: 'space-around', marginVertical: '2%', marginHorizontal: '5%' }}
                keyExtractor={(item) => item.id}
                renderItem={(item) => <Card data={item.item} />}
            />
        </View>
    )
}

export default ProductComponent