import { View } from 'react-native'
import React from 'react'
import IconComponent from '@components/IconComponent'
import { useTheme,Text } from 'react-native-paper'
import { TrackOrderStatusProps } from '../types'

const TrackOrderStatus = (props:TrackOrderStatusProps) => {
    const theme = useTheme()
    const {title,message,icon} = props
    return (
        <View style={{ flexDirection: 'row' }}>
            <IconComponent iconDirectory='Ionicons' name={icon} color={theme.colors.primary} size={35} />
            <Text>
                <Text variant='titleMedium'>{title +'\n'}</Text>
                <Text variant='titleSmall' style={{color:theme.colors.secondary}}>{message}</Text>
            </Text>
        </View>
    )
}

export default TrackOrderStatus