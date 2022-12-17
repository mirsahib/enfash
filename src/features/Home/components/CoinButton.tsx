import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const CoinButton = () => {
    return (
        <View style={{ backgroundColor: 'white', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 2 }}>
            <Icon name='coins' color={"black"} size={25} />
        </View>
    )
}

export default CoinButton