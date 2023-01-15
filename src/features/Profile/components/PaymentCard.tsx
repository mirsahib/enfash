import { View } from 'react-native';
import React from 'react';
import IconComponent from '@components/IconComponent';
import { Text, useTheme } from 'react-native-paper';

const PaymentCard = () => {
    const theme = useTheme();

    return (
        <View
            style={{
                backgroundColor: theme.colors.background,
                flexDirection: 'row',
                padding: '5%',
                borderRadius: 10,
                borderLeftColor: theme.colors.tertiary,
                borderLeftWidth: 20,
                alignItems: 'center'
            }}
        >
                <IconComponent
                    iconDirectory="FontAwesome"
                    name="cc-visa"
                    color={theme.colors.primary}
                    size={65}
                    style={{ marginRight: 10 }}
                />
            <View>
                <Text variant="titleMedium">Justin William</Text>
                <Text variant="labelSmall">Exp:03/25</Text>
                <Text variant="labelSmall">Card Ending:03456</Text>
            </View>
        </View>
    );
};

export default PaymentCard;
