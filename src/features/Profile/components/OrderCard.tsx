import { View } from 'react-native';
import React from 'react';
import { Text, Button, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {
    DrawerNavParams,
    MainNavParams
} from '@navigation/utils/NavigationTypes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { OrderCardProps } from '../types';
import { DrawerNavigationProp } from '@react-navigation/drawer';

const OrderCard = (props: OrderCardProps) => {
    const theme = useTheme();
    const navigation =
        useNavigation<NativeStackNavigationProp<MainNavParams>>();

    const renderOrderStatus = () => {
        let text = null;
        switch (props.orderStatus) {
            case 'Delivered':
                text = (
                    <Text style={{ color: 'green' }} variant="titleSmall">
                        {props.orderStatus}
                    </Text>
                );
                break;
            case 'In transit':
                text = (
                    <Text style={{ color: 'orange' }} variant="titleSmall">
                        {props.orderStatus}
                    </Text>
                );
                break;
            case 'Cancelled':
                text = (
                    <Text style={{ color: 'red' }} variant="titleSmall">
                        {props.orderStatus}
                    </Text>
                );
                break;
            default:
                text = (
                    <Text style={{ color: 'green' }} variant="titleSmall">
                        {props.orderStatus}
                    </Text>
                );
        }
        return text;
    };
    const navigateToDetails = () => {
        console.log('order details');
        navigation.navigate('OrderDetails', {
            orderId: props.orderId,
            orderStatus: props.orderStatus,
            total: props.total,
            orderDate: props.orderDate,
            productList: props.productList,
            address: props.address
        });
    };

    return (
        <View
            style={{
                backgroundColor: 'white',
                padding: '5%',
                marginBottom: '5%',
                borderRadius: 10
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: '1%'
                }}
            >
                <Text variant="titleMedium">#{props.orderId}</Text>
                {renderOrderStatus()}
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Text>{props.orderDate}</Text>
                <Text variant="titleSmall">$ {props.total}</Text>
            </View>
            <View
                style={{
                    backgroundColor: theme.colors.primaryContainer,
                    padding: 1,
                    marginVertical: '5%'
                }}
            ></View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: '1%'
                }}
            >
                <Button mode="outlined" onPress={() => navigateToDetails()}>
                    Details
                </Button>
                <Button mode="outlined">Reorder</Button>
            </View>
        </View>
    );
};

export default OrderCard;
