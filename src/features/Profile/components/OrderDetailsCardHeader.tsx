import { View, Image } from 'react-native';
import React from 'react';
import { Text, useTheme } from 'react-native-paper';
import { OrderDetailsCardHeaderPropsType } from '../types';

const OrderDetailsCardHeader = (props:OrderDetailsCardHeaderPropsType) => {
    const theme = useTheme();
    const {orderId,orderStatus,total,orderDate,address} = props
    return (
        <View
            style={{
                backgroundColor: theme.colors.background,
                borderRadius: 10,
                padding: '5%',
                justifyContent: 'space-between'
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}
            >
                <Image
                    source={require('@assets/icons/basket.png')}
                    resizeMode={'contain'}
                    style={{
                        width: 80,
                        height: 80
                    }}
                />
                <View>
                    <Text variant="titleLarge"> Order {orderStatus}</Text>
                    <Text variant="titleLarge"> Total: ${total}</Text>
                </View>
            </View>
            <View>
                <Text>
                    <Text variant="titleSmall">Address: </Text>
                    <Text>{address}</Text>
                </Text>
            </View>
            <View>
                <View
                    style={{
                        height: 1,
                        backgroundColor: theme.colors.primaryContainer,
                        marginBottom: '1%'
                    }}
                ></View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <Text variant="titleSmall">#{orderId}</Text>
                    <Text
                        style={{ color: theme.colors.tertiary }}
                        variant="titleSmall"
                    >
                        Report Issue
                    </Text>
                </View>
                <Text variant="titleSmall">{orderDate}</Text>
            </View>
        </View>
    );
};

export default OrderDetailsCardHeader;
