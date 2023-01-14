import { View, Pressable } from 'react-native';
import React from 'react';
import IconComponent from '@components/IconComponent';
import { Text, useTheme } from 'react-native-paper';
import { AddAddressCardProps } from '../types';


const AddressCard = (props:AddAddressCardProps) => {
    const theme = useTheme();
    const {title,address,status,selectCard} = props
    return (
        <Pressable
            onPress={selectCard}
            style={{
                backgroundColor: theme.colors.background,
                padding: '5%',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: '5%',
                borderRadius: 10,
                borderWidth: status==="ACTIVE"?2:0,
                borderColor: status==="ACTIVE"?theme.colors.tertiary:theme.colors.secondary
            }}
        >
            <View style={{ flex: 2 }}>
                <Text>{title}</Text>
                <Text>{address}</Text>
            </View>
            <IconComponent
                iconDirectory="AntDesign"
                name={'checkcircle'}
                color={status==="ACTIVE"?theme.colors.tertiary:theme.colors.secondary}
                size={25}
            />
        </Pressable>
    );
};

export default AddressCard;
