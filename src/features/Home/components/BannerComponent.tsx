import { View, Text, Image } from 'react-native'
import React from 'react'

const BannerComponent = () => {
    return (
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'space-evenly' }}>
            <View style={{ width: "90%", height: "70%"}}>
                <Image source={require('../../../assets/banner1.jpeg')} style={{flex:1,resizeMode:'contain',width:"100%",borderRadius:25}}/>
            </View>
            {/* <View style={{ width: "80%", height: "20%", backgroundColor: 'white' }}></View> */}
        </View>
    )
}

export default BannerComponent