import { View, Image } from 'react-native'
import React from 'react'
import { Card, useTheme,Text, IconButton } from 'react-native-paper'

const CardComponent = () => {
    const theme = useTheme()

    const handleNav = () => {
        console.log('go to product')
    }
    return (
        <Card onPress={() => handleNav()} style={{ backgroundColor: theme.colors.background, padding: "3%" }}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={{ uri: 'https://picsum.photos/700' }} style={{ flex: 1, height: 100 }} />
                <Card.Content style={{ flex: 2 }}>
                    <Text variant='labelMedium' ellipsizeMode='tail' style={{ flex: 1 }} numberOfLines={2}>Purple Snickers</Text>
                    <Text variant='labelLarge'>$ 23.3</Text>
                    <Text variant='labelLarge'> 4.1</Text>
                </Card.Content>
                <Card.Actions style={{ flex: 1 }}>
                    <IconButton
                        icon="cart-variant"
                        iconColor={theme.colors.primary}
                        size={20}
                        onPress={() => console.log('Pressed')}
                    />
                </Card.Actions>
            </View>
        </Card>
    )
}

export default CardComponent