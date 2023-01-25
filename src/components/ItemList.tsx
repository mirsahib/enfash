import { View, Image, Pressable } from 'react-native'
import React from 'react'
import { CounterButtonRounded } from '@components/CounterButton'
import { Text, useTheme } from 'react-native-paper'
import { ProductType } from '@utils/containerTypes'
import { useAppDispatch } from '@store/index'
import { decreaseCart, increaseCart, removeFromCart } from '@store/cart'
import IconButton from './IconButton'

type ItemListProps = {
    data: {
        product: ProductType | null,
        count: number,
        productPrice: number,
    }
}

const ItemList = (props: ItemListProps) => {
    const theme = useTheme()

    const product= props.data.product || {} as ProductType
    const {title,image,price} = product
    
    const dispatch = useAppDispatch()

    const increaseItem = () => {
        dispatch(increaseCart(product))
    }
    const decreaseItem = () => {
        dispatch(decreaseCart(product))
    }

    const removeItem = () =>{
        dispatch(removeFromCart(product))
    }


    return (
        <Pressable
            // onPress={() => handleNav()}
            style={{
                backgroundColor: theme.colors.background,
                padding: '3%',
                borderRadius: 10
            }}
        >
            <View style={{ flexDirection: 'row' }}>
                <Image
                    source={{ uri: image }}
                    style={{ flex: 1, height: 80 }}
                />
                <View style={{ flex: 2, marginHorizontal: '5%' }}>
                    <Text
                        variant="labelSmall"
                        ellipsizeMode="tail"
                        style={{ flex: 1 }}
                        numberOfLines={2}
                    >
                        {title}
                    </Text>
                    <Text variant="labelLarge">$ {price}</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                        >
                            
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                    <View
                        style={{
                            borderRadius: 20,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <IconButton
                            containerStyle={{
                                width: 35,
                                height: 35,
                                borderRadius: 35 / 2,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: theme.colors.primaryContainer
                            }}
                            android_ripple={{
                                color: theme.colors.primary,
                                borderless: true
                            }}
                            onPress={() => removeItem()}
                            iconDirectory="EvilIcons"
                            icon="trash"
                            iconColor={theme.colors.primary}
                            iconSize={30}
                        />
                    </View>
                    <View
                        style={{
                            borderRadius: 20,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <CounterButtonRounded defaultValue={props.data.count} buttonLeftAction={() => decreaseItem()} buttonRightAction={() => increaseItem()} buttonWidth={20} />
                    </View>
                </View>
            </View>
        </Pressable>

    )
}

export default ItemList