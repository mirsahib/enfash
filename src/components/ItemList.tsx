import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {CounterButtonRounded} from '../features/Product/components/CounterButton'
import Icon from 'react-native-vector-icons/AntDesign'

const ItemList = () => {
    return (
        <View style={{ padding: '5%', flexDirection: 'row' }}>
            <Image source={require('../assets/product1.png')} style={{ width: 80, height: 80, flex: 1 }} />
            <View style={{ flex: 2, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'black', fontWeight: '600' }}>Hair gel</Text>
                    {/* <Text style={{ color: 'black', fontWeight: '600' }}>X</Text> */}
                    <TouchableOpacity onPress={()=>console.log('delete')} style={{backgroundColor:'black',justifyContent:'center',alignItems:'center',width:15,height:15,borderRadius:15/2}}>
                        <Icon name="close" size={15} color="white"/>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'black', fontWeight: '600' }}>$ 19.99</Text>
                    <CounterButtonRounded buttonWidth={20} />
                </View>
            </View>
        </View>

    )
}

export default ItemList