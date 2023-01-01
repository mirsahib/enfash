import { View } from 'react-native'
import React from 'react'
import CardView from '@components/CardView'
import { useTheme } from 'react-native-paper'
import { FlatList } from 'react-native-gesture-handler'
import Layout from '../wrapper/Layout'


const PromoCodes = () => {
  const theme = useTheme()

  return (
      <View style={{
        flex: 1,
        marginHorizontal: '5%',
      }}>
        <FlatList 
        data={[
          {id:"1"},
          {id:"2"},
          {id:"3"},
        ]}
        keyExtractor={(item)=>item.id}
        renderItem={()=><CardView/>}/>
      </View>
  )
}

export default Layout(PromoCodes)