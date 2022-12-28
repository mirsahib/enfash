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
          <ProfileAction actionText='Order History' actionIcon='clipboard' iconDirectory='Feather'/>
          <ProfileAction actionText='Payment Method' actionIcon='creditcard' iconDirectory='AntDesign'/>
          <ProfileAction actionText='My Address' actionIcon='location-outline' iconDirectory='Ionicons'/>
          <ProfileAction actionText='Promocodes' actionIcon='gift-outline' iconDirectory='Ionicons'/>
          <ProfileAction actionText='Track Order' actionIcon='truck' iconDirectory='Feather'/>
          <ProfileAction actionText='FAQ' actionIcon='question-circle-o' iconDirectory='FontAwesome'/>
          <ProfileAction actionText='LogOut' actionIcon='log-out' iconDirectory='Feather'/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile
