import {  View } from 'react-native'
import React from 'react'
import { Avatar, useTheme,Text } from 'react-native-paper'
import ProfileAction from '../components/ProfileAction'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { MainNavParams } from '@navigation/utils/NavigationTypes'
import Layout from '../wrapper/Layout'

const Profile = () => {
  const theme = useTheme()
  const navigation = useNavigation<NativeStackNavigationProp<MainNavParams>>()
  return (
      <View style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        margin: '5%',
        paddingTop: '5%',
        paddingHorizontal: '5%'
      }}>
        <View style={{ alignItems: 'center' }}>
          <Avatar.Image size={120} source={require("@assets/account.jpg")} />
          <Text variant='titleSmall'>William Justin</Text>
          <Text style={{ color: theme.colors.secondary }}>william@mail.com</Text>
        </View>
        <View>
          {/* profile details */}
          <ProfileAction onPress={()=>navigation.navigate("AccountNav",{screen:"OrderHistory"})} actionText='Order History' actionIcon='clipboard' iconDirectory='Feather'/>
          <ProfileAction onPress={()=>navigation.navigate("AccountNav",{screen:"Payment"})} actionText='Payment Method' actionIcon='creditcard' iconDirectory='AntDesign'/>
          <ProfileAction onPress={()=>navigation.navigate("AccountNav",{screen:"Address"})} actionText='My Address' actionIcon='location-outline' iconDirectory='Ionicons'/>
          <ProfileAction onPress={()=>navigation.navigate("AccountNav",{screen:"PromoCode"})} actionText='Promocodes' actionIcon='gift-outline' iconDirectory='Ionicons'/>
          <ProfileAction onPress={()=>navigation.navigate("AccountNav",{screen:"TrackOrder"})} actionText='Track Order' actionIcon='truck' iconDirectory='Feather'/>
          <ProfileAction onPress={()=>navigation.navigate("AccountNav",{screen:"Faq"})} actionText='FAQ' actionIcon='question-circle-o' iconDirectory='FontAwesome'/>
          <ProfileAction onPress={()=>console.log('logout')} actionText='LogOut' actionIcon='log-out' iconDirectory='Feather'/>
        </View>
      </View>
  )
}

export default Layout(Profile)
