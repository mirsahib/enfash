import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text, useTheme } from 'react-native-paper'
import { Avatar } from 'react-native-paper';

const Header = () => {
    const theme = useTheme()
  return (
    <View style={{flexDirection:'row',alignItems:'center'}}>
        <Avatar.Text size={30} label="CW" />
        <View style={{marginHorizontal:'5%'}}>
            <Text variant='titleMedium'>Hello, William</Text>
            <Text variant='labelSmall' style={{color:theme.colors.tertiary}}>123,South Street,NY</Text>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})