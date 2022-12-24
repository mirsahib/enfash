import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { CounterButtonRounded } from '@components/CounterButton'
import Icon from 'react-native-vector-icons/AntDesign'
import { Text } from 'react-native-paper'
import { ProductType } from '@utils/containerTypes'
import { useAppDispatch } from '@store/index'
import { addTocart, removeFromCart } from '@store/cart'

type ItemListProps = {
    data: {
        product: ProductType | null,
        count: number,
        productPrice: number,
    }
}

const ItemList = (props: ItemListProps) => {

    const product = props.data.product
    const dispatch = useAppDispatch()

    const addItem = () => {
        if(product){
            dispatch(addTocart(product))
        }
    }
    const removeItem = () => {
        if(product){
            dispatch(removeFromCart(product))
        }
    }


    return (
        <View style={{ padding: '5%', flexDirection: 'row' }}>
            <Image source={{ uri: product?.image }} style={{ width: 80, height: 80, flex: 1 }} resizeMode='contain' />
            <View style={{ flex: 2, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text variant='titleSmall' adjustsFontSizeToFit ellipsizeMode='tail' style={{ flex: 1 }} numberOfLines={2}>{product?.title}</Text>
                    <TouchableOpacity onPress={() => console.log('delete')} style={{ backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', width: 15, height: 15, borderRadius: 15 / 2 }}>
                        <Icon name="close" size={15} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text variant='labelLarge' >$ {props.data.productPrice.toFixed(2)}</Text>
                    <CounterButtonRounded defaultValue={props.data.count} buttonLeftAction={() => removeItem()} buttonRightAction={() => addItem()} buttonWidth={20} />
                </View>
            </View>
        </View>

    )
}

export default ItemList