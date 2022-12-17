import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'


const QrCodeButton = () => {
    return (
        <View style={{ backgroundColor: 'white',width:40,height:40,justifyContent:'center',alignItems:'center',borderRadius: 10, elevation: 2 }}>
            <Icon name='qrcode' color={"black"} size={30} />
        </View>
    )
}

export default QrCodeButton