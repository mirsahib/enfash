import { View, Pressable } from 'react-native'
import React, { lazy } from 'react'
import { Text, useTheme } from 'react-native-paper'
import IconComponent, { directory } from '@components/IconComponent'

type ProfileActionProps = {
  actionText: string,
  actionIcon: string,
  iconDirectory: directory,
  onPress:()=>void
}

const ProfileAction = (props: ProfileActionProps) => {
  const theme = useTheme()
  return (
    <Pressable style={{ flexDirection: 'row', borderWidth: 1, borderColor: theme.colors.primaryContainer, marginVertical: '1%' }} android_ripple={{ color: theme.colors.secondary }} onPress={props.onPress}>
      <View style={{ flex: 1, alignItems: 'center', paddingVertical: 10, backgroundColor: theme.colors.primaryContainer }}>
        <IconComponent iconDirectory={props.iconDirectory} name={props.actionIcon} size={25} color={theme.colors.primary} />
      </View>
      <View style={{flex:2,justifyContent:'center',paddingLeft:10}}>
        <Text variant='titleMedium'>{props.actionText}</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
        <IconComponent iconDirectory='Feather' name='arrow-right' size={25} color={theme.colors.primary} />
        {/* <Text>Arrow</Text> */}
      </View>
    </Pressable>
  )
}

export default ProfileAction
