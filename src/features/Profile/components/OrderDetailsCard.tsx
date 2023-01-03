import { View, Image } from 'react-native'
import React from 'react'
import { useTheme,Text } from 'react-native-paper'
import { OrderDetailsCardProps } from '../types'

const OrderDetailsCard = (props:OrderDetailsCardProps) => {
    const theme = useTheme()

    return (
        <View style={{ backgroundColor: theme.colors.background, marginVertical: '1%', padding: '2%', borderRadius: 10 }}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={{ uri: props.product.image }} resizeMode={'contain'} style={{ flex: 1, height: 80 }} />
                <Text variant='labelMedium' adjustsFontSizeToFit ellipsizeMode='tail' style={{ flex: 2, marginHorizontal: '3%' }}>{props.product.title}</Text>
                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                    <Text variant='titleSmall'>$ {props.product.price}</Text>
                    <Text>Quantity: {props.quantity}</Text>
                </View>
            </View>
        </View>
    )
}

export default OrderDetailsCard