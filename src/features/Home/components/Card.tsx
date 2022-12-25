import React from 'react'
import { useTheme, Text } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ProductType } from '@utils/containerTypes'
import { Card } from 'react-native-paper';
import { MainNavParams } from '@navigation/utils/NavigationTypes'

type CardProps = {
    data: ProductType
}

const CardComponent = (props: CardProps) => {
    const theme = useTheme()
    const navigation = useNavigation<NativeStackNavigationProp<MainNavParams>>()
    const handleNav= () => {
        navigation.navigate('ProductNav', { screen: 'Product', params: { ...props.data } })
    }
    return (
        <Card onPress={()=>handleNav()} style={{width:160,backgroundColor:theme.colors.background}}>
            <Card.Cover source={{ uri: props.data.image }} style={{resizeMode:'contain'}} />
            <Card.Content>
                <Text variant='labelMedium' ellipsizeMode='tail' style={{flex:1}} numberOfLines={2}>{props.data.title}</Text>
                <Text variant='labelLarge'>$ {props.data.price}</Text>
            </Card.Content>
        </Card>

    )
}

export default CardComponent