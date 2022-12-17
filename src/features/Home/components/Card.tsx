import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type CardProps = {
    id: string,
    productName: string,
    productPrice: number,
    productImage: string,
}
type MainNavigationParams = {
    ProductNav:any,
    HomeNav:any,
}


const CardComponent = (props: CardProps) => {
    const theme = useTheme()
    const navigation = useNavigation<NativeStackNavigationProp<MainNavigationParams>>()
    const handleNavigation = ()=>{
        navigation.navigate('ProductNav',{screen:'Product',params:{...props}})        
    }
    return (
        <TouchableOpacity style={{
            width: 140,
            paddingBottom:10,
            backgroundColor: 'white',
            borderRadius: 15
        }} onPress={()=>handleNavigation()} >
            {/* card container */}
            <View>
                {/* image container */}
                <Image source={{ uri: props.productImage }} style={{ width: 140, height: 150 }} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '5%' }}>
                <View>
                    {/* text container */}
                    <Text style={{ color: theme.colors.primary, fontSize: 8, fontWeight: '500' }}>
                        {props.productName}
                    </Text>
                    <Text style={{ color: theme.colors.primary, fontSize: 12, fontWeight: '500' }}>
                        $ {props.productPrice}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CardComponent