import { View, Text, Image } from 'react-native'
import React from 'react'

const BannerComponent = () => {
    return (
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'space-evenly' }}>
            <View style={{ width: "90%", height: "70%", borderRadius: 25, backgroundColor: '#D1E4A5' }}>
                <Image source={require('../../../assets/banner_bg.png')} style={{width:'100%',height:'100%'}}/>
            </View>
            <View style={{ width: "80%", height: "20%", backgroundColor: 'white' }}></View>
        </View>
    )
}

export default BannerComponent