import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileScreens from '@features/Profile'
import { ProfileNavParams } from './utils/NavigationTypes'
import ProfileNavigatorOptions from './utils/ProfileNavigatorOptions'
const Stack = createNativeStackNavigator<ProfileNavParams>()

const ProfileNavigator = () => {

  return (
    <Stack.Navigator>
        <Stack.Screen name="Profile" options={ProfileNavigatorOptions} component={ProfileScreens.Profile}/>
        <Stack.Screen name="OrderHistory" options={ProfileNavigatorOptions} component={ProfileScreens.OrderHistory}/>
        <Stack.Screen name="OrderDetails" options={ProfileNavigatorOptions} component={ProfileScreens.OrderDetails}/>
        <Stack.Screen name="Payment" options={ProfileNavigatorOptions} component={ProfileScreens.PaymentMethod}/>
        <Stack.Screen name="Address" options={ProfileNavigatorOptions} component={ProfileScreens.Address}/>
        <Stack.Screen name="PromoCode" options={ProfileNavigatorOptions} component={ProfileScreens.PromoCodes}/>
        <Stack.Screen name="TrackOrder" options={ProfileNavigatorOptions} component={ProfileScreens.TrackOrder}/>
        <Stack.Screen name="Faq" options={ProfileNavigatorOptions} component={ProfileScreens.Faq}/>
    </Stack.Navigator>
  )
}

export default ProfileNavigator