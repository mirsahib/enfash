import { View } from 'react-native'
import React from 'react'
import { Button, useTheme } from 'react-native-paper'
import ProfileAction from '../components/ProfileAction'
import Layout from '../wrapper/Layout'
const Address = () => {
  const theme = useTheme()
  return (
      <View style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        marginHorizontal: '5%',
        marginVertical: '5%',
        padding: '5%',
        justifyContent:'space-between'

      }}>
        <View>
          {/* profile details */}
          <ProfileAction
            onPress={() => { }}
            actionText='Home'
            actionSecondaryText='1106 Cedar Point Blvd, Cedar Point, NC 28584, United States'
            actionIcon='home'
            iconDirectory='AntDesign'
            actionIconSecondary='edit'
            actionIconSecondaryDirectory='AntDesign'
          />
          <ProfileAction
            onPress={() => { }}
            actionText='Work'
            actionSecondaryText='39060 John Mosby Hwy, Middleburg, VA 20117, United States'
            actionIcon='briefcase'
            iconDirectory='Feather'
            actionIconSecondary='edit'
            actionIconSecondaryDirectory='AntDesign'
          />
        </View>
        <View>
          <Button mode='text' icon={"plus"}>Add New Address</Button>
        </View>
      </View>
  )
}


export default Layout(Address)