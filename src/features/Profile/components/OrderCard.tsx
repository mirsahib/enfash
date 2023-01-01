import { View } from 'react-native'
import React from 'react'
import { Text, Button, useTheme } from 'react-native-paper'
type OrderCardProps = {
    data: {
        orderId: string
        orderStatus: string,
        orderDate: string,
        products: {
            title: string,
            quantity: number,
            price: number
        }[]
        total: number
    }
}

const OrderCard = (props: OrderCardProps) => {
    const theme = useTheme()
    return (
        <View style={{ backgroundColor: 'white', padding: '5%',marginBottom:'5%',borderRadius:10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: '1%' }}>
                <Text variant='titleMedium'>#{props.data.orderId}</Text>
                <Text style={{ color: "green" }} variant='titleSmall'>{props.data.orderStatus}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>{props.data.orderDate} at 1:45 pm</Text>
                <Text variant='titleSmall'>$ {props.data.total}</Text>
            </View>
            <View style={{ backgroundColor: theme.colors.primaryContainer, padding: 1, marginVertical: '5%' }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: '1%' }}>
                <Button mode='outlined'>Details</Button>
                <Button mode='text' textColor='red'>Reorder</Button>
            </View>
        </View>
    )
}

export default OrderCard