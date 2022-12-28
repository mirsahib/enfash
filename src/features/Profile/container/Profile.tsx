import {  View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar, useTheme,Text } from 'react-native-paper'
import ProfileAction from '../components/ProfileAction'

const Profile = () => {
  const theme = useTheme()
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: theme.colors.primaryContainer }}>
      <View style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        marginHorizontal: '5%',
        marginVertical: '10%',
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
          <ProfileAction onPress={()=>{}} actionText='Order History' actionIcon='clipboard' iconDirectory='Feather'/>
          <ProfileAction onPress={()=>{}} actionText='Payment Method' actionIcon='creditcard' iconDirectory='AntDesign'/>
          <ProfileAction onPress={()=>{}} actionText='My Address' actionIcon='location-outline' iconDirectory='Ionicons'/>
          <ProfileAction onPress={()=>{}} actionText='Promocodes' actionIcon='gift-outline' iconDirectory='Ionicons'/>
          <ProfileAction onPress={()=>{}} actionText='Track Order' actionIcon='truck' iconDirectory='Feather'/>
          <ProfileAction onPress={()=>{}} actionText='FAQ' actionIcon='question-circle-o' iconDirectory='FontAwesome'/>
          <ProfileAction onPress={()=>{}} actionText='LogOut' actionIcon='log-out' iconDirectory='Feather'/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile
