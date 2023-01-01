import { View, Pressable, StyleProp, ViewProps } from 'react-native'
import React from 'react'
import { Text, useTheme } from 'react-native-paper'
import IconComponent, { directory } from '@components/IconComponent'

type ProfileActionProps = {
  actionText: string,
  actionIcon: string,
  actionIconSecondary?: string
  actionIconSecondaryDirectory?: directory
  actionSecondaryText?: string
  iconDirectory: directory,
  onPress:()=>void
  containerStyle?:StyleProp<ViewProps>
}

const ProfileAction = (props: ProfileActionProps) => {
  const theme = useTheme()
  return (
    <Pressable style={[{ flexDirection: 'row', borderWidth: 1, borderColor: theme.colors.primaryContainer, marginVertical: '1%' },props.containerStyle]} android_ripple={{ color: theme.colors.secondary }} onPress={props.onPress}>
      <View style={{ flex: 1, alignItems: 'center', paddingVertical: 10, backgroundColor: theme.colors.primaryContainer }}>
        <IconComponent iconDirectory={props.iconDirectory} name={props.actionIcon} size={25} color={theme.colors.primary} />
      </View>
      <View style={{flex:2,justifyContent:'center',paddingLeft:10}}>
        <Text variant='titleMedium'>{props.actionText}</Text>
        {<Text style={{color:theme.colors.secondary}}>{props.actionSecondaryText??""}</Text>}
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center',paddingRight:'5%' }}>
        <IconComponent iconDirectory={props.actionIconSecondaryDirectory??"Feather"} name={props.actionIconSecondary??"arrow-right"} size={25} color={theme.colors.primary} />
      </View>
    </Pressable>
  )
}

export default ProfileAction
