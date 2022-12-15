import { View, Text } from 'react-native'
import React from 'react'

const BannerComponent = () => {
    return (
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'space-evenly' }}>
            <View style={{ width: "80%", height: "70%", borderRadius: 25, backgroundColor: 'white' }}></View>
            <View style={{ width: "80%", height: "20%", backgroundColor: 'white' }}></View>
        </View>
    )
}

export default BannerComponent