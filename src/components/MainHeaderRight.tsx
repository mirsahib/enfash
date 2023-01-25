import React from 'react';
import { Text, useTheme } from 'react-native-paper';
import IconButton from '@components/IconButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainNavParams } from '@navigation/utils/NavigationTypes';
import { View } from 'react-native';
import { useAppSelector } from '@store/index';

const MainHeaderRight = () => {
    const theme = useTheme();
    const navigation =
        useNavigation<NativeStackNavigationProp<MainNavParams>>();
    const cart = useAppSelector(state=>state.shoppingCart)

    const gotoCartScreen = () => {
        // three tier deep nested navigation
        navigation.navigate('DrawerNav', {
            screen: 'TabNav',
            params: { screen: 'CartTab' }
        });
    };

    return (
        <View style={{
          width:40,
          height:40,
          borderRadius:40/2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:theme.colors.primaryContainer
        }}>
            <IconButton
                // containerStyle={{

                // }}
                iconDirectory="Ionicons"
                icon="md-basket-outline"
                iconColor={theme.colors.primary}
                iconSize={25}
                onPress={() => gotoCartScreen()}
            />
            {cart.totalItem!=0?<View
                style={{
                    position: 'absolute',
                    top: 3,
                    left: 25,
                    backgroundColor: theme.colors.primary,
                    width: 14,
                    height: 14,
                    borderRadius:14/2,
                    justifyContent:'center',
                    alignItems:'center'
                }}
            >
                <Text style={{ color: theme.colors.background,fontSize:8 }}>{cart.totalItem}</Text>
            </View>:<></>}
        </View>
    );
};

export default MainHeaderRight;
