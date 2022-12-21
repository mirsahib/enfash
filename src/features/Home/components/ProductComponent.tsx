import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Card from './Card'
import { FlatList } from 'react-native-gesture-handler'
import data from '../utils/data'

const ProductComponent = () => {
    return (
        <View style={{ flex: 3 }}>
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