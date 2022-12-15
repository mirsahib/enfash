import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'

const HeaderRight = () => {
  return (
    <TouchableOpacity>
      <View style={{flexDirection:'row'}}>
        <Icon name="shopping-bag" size={25} color="black" />
        <Text style={{color:'white',backgroundColor:'black',width:20,height:20,fontSize:8,borderRadius:10,textAlign:'center',textAlignVertical:'center',position:'absolute',left:18,top:-5}}>1</Text>
      </View>
    </TouchableOpacity>
  )
}

export default HeaderRight