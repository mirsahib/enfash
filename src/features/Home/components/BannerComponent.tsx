import { View, Image,} from 'react-native'
import React from 'react'


const BannerComponent = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center',marginVertical:'5%'}}>
            <View style={{ width: "90%", height: "95%" }}>
                <Image source={require('@assets/banner1.jpeg')} style={{ flex: 1, resizeMode: 'contain', width: "100%", borderRadius: 25 }} />
            </View>
        </View>
    )
}

export default BannerComponent