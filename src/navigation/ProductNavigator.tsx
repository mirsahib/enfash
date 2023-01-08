import React from 'react'
import ProductScreens from '@features/Product'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductNavigatorOptions from './utils/ProductNavigatorOptions'
import { ProductNavParams } from './utils/NavigationTypes'
const Stack = createNativeStackNavigator<ProductNavParams>()

const ProductNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Product' component={ProductScreens.Product}
            options={ProductNavigatorOptions}
            />
            <Stack.Screen name="Review" component={ProductScreens.Review}
            options={ProductNavigatorOptions}
            />
        </Stack.Navigator>
    )
}

export default ProductNavigator