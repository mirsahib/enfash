import { View } from 'react-native'
import React from 'react'
import { Text, Button, useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { MainNavParams } from '@navigation/utils/NavigationTypes'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type OrderStatus = "Delivered" | "Cancelled" | "In transit"
type OrderCardProps = {
    data: {
        orderId: string
        orderStatus: OrderStatus,
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
    const navigation = useNavigation<NativeStackNavigationProp<MainNavParams>>()

    const renderOrderStatus = () => {
        let text = null
        switch (props.data.orderStatus) {
            case "Delivered":
                text = <Text style={{ color: "green" }} variant='titleSmall'>{props.data.orderStatus}</Text>
                break
            case "In transit":
                text = <Text style={{ color: "orange" }} variant='titleSmall'>{props.data.orderStatus}</Text>
                break
            case "Cancelled":
                text = <Text style={{ color: "red" }} variant='titleSmall'>{props.data.orderStatus}</Text>
                break
            default:
                text = <Text style={{ color: "green" }} variant='titleSmall'>{props.data.orderStatus}</Text>
        }
        return text
    }

    return (
        <View style={{ backgroundColor: 'white', padding: '5%', marginBottom: '5%', borderRadius: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: '1%' }}>
                <Text variant='titleMedium'>#{props.data.orderId}</Text>
                {renderOrderStatus()}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>{props.data.orderDate} at 1:45 pm</Text>
                <Text variant='titleSmall'>$ {props.data.total}</Text>
            </View>
            <View style={{ backgroundColor: theme.colors.primaryContainer, padding: 1, marginVertical: '5%' }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: '1%' }}>
                <Button mode='outlined' onPress={()=>navigation.navigate("AccountNav",{screen:'OrderDetails'})} >Details</Button>
                <Button mode='outlined' >Reorder</Button>
            </View>
        </View>
    )
}

export default OrderCard