import { View, Text } from 'react-native'
import React from 'react'
import ProductScreens from '../features/Product/'
import Header from '../components/Header'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

const {HeaderRight} = ProductScreens 

const ProductNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Product' initialParams={{
                id: "",
                productName: "",
                productImage: "",
                productPrice: 0
            }} component={ProductScreens.Product}
            options={{headerRight:()=><HeaderRight/>,headerTitle:()=><Header/>,headerTitleAlign:'left'}}
            />
        </Stack.Navigator>
    )
}

export default ProductNavigator