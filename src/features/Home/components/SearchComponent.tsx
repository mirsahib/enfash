import { View, Text } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign'


const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query:string) => setSearchQuery(query);

  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'  }}>
        <View style={{ backgroundColor: 'white', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 10,elevation:2 }}>
          <Icon name='qrcode' color={"black"} size={30} />
        </View>
        <Searchbar
          style={{ backgroundColor:'#E6E6E7', width: '80%', height: 40,borderRadius:10 }}
          inputStyle={{ fontSize: 16, padding: 0 }}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          elevation={0}
        />
    </View>
  )
}

export default SearchComponent