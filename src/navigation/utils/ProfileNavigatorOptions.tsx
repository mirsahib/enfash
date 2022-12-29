import { View, Text } from 'react-native'
import React from 'react'
import { ProfileScreenProps } from './NavigationTypes'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'



const ProfileNavigatorOptions = (props: ProfileScreenProps) => {
    const routeName = props.route.name
    let options: NativeStackNavigationOptions = {}

    switch (routeName) {
        case "Profile":
            options={
                headerTitle:"Profile"
            }
            break
        case "OrderHistory":
            options={
                headerTitle:"Order History"
            }
            break
        case "Payment":
            options={
                headerTitle:"Payment"
            }
            break
        case "Address":
            options={
                headerTitle:"Address"
            }
            break
        case "PromoCode":
            options={
                headerTitle:"Promo Code"
            }
            break
        case "TrackOrder":
            options={
                headerTitle:"Track Order"
            }
            break
        case "Faq":
            options={
                headerTitle:"FAQ"
            }
            break
        default:
            throw new Error("Route name not supported")
    }

    return options
}

export default ProfileNavigatorOptions