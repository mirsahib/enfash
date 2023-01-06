import {FlatList, View} from 'react-native';
import React from 'react';
import {Searchbar, Text, useTheme} from 'react-native-paper';
import {useState} from 'react';
import ProductData from '@features/Home/utils/data'


const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query: string) => setSearchQuery(query);
  const theme = useTheme();
  return (
    <View style={{flex: 1, paddingHorizontal: '5%'}}>
      <View style={{marginVertical: '5%'}}>
        <Searchbar
          placeholder="Search for products..."
          placeholderTextColor={theme.colors.secondary}
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            marginVertical: '2%',
          }}
          elevation={0}
        />
        <Text variant='labelLarge' style={{textAlign:'center'}}>Popular Search</Text>
        <FlatList
            data={ProductData.slice(0,5)}
            keyExtractor={item=>item.id}
            renderItem={(item)=>(<Text style={{textAlign:'center',textDecorationLine:"underline",marginVertical:'1%',color:theme.colors.tertiary}}>{item.item.title}</Text>)}
        />
      </View>
    </View>
  );
};

export default Search;
