import { View, Text } from 'react-native'
import React from 'react'
import ProductScreens from '../features/Product/'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

const ProductNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Product' initialParams={{id:"",productName:"",productImage:"",productPrice:0}} component={ProductScreens.Product}/>
        </Stack.Navigator>
    )
}

export default ProductNavigator