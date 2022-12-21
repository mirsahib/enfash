import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {CounterButtonRounded} from '@components/CounterButton'
import Icon from 'react-native-vector-icons/AntDesign'
import { Text } from 'react-native-paper'
import { ProductType } from '@utils/containerTypes'

type ItemListProps= {
    data:ProductType
}

const ItemList = (props:ItemListProps) => {
    const {title,price,image} = props.data


    return (
        <View style={{ padding: '5%', flexDirection: 'row' }}>
            <Image source={{uri:image}} style={{ width: 80, height: 80, flex: 1 }} resizeMode='contain' />
            <View style={{ flex: 2, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text variant='titleSmall' adjustsFontSizeToFit ellipsizeMode='tail' style={{flex:1}} numberOfLines={2}>{title}</Text>
                    <TouchableOpacity onPress={()=>console.log('delete')} style={{backgroundColor:'black',justifyContent:'center',alignItems:'center',width:15,height:15,borderRadius:15/2}}>
                        <Icon name="close" size={15} color="white"/>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text variant='labelLarge' >$ {price}</Text>
                    <CounterButtonRounded buttonWidth={20} />
                </View>
            </View>
        </View>

    )
}

export default ItemList