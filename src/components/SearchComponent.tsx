import React from 'react'
import { Searchbar } from 'react-native-paper';


const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query:string) => setSearchQuery(query);

  return (
      <Searchbar
          style={{ backgroundColor:'#E6E6E7',width:'80%',height:40,borderRadius:10 }}
          inputStyle={{ fontSize: 16, padding: 0 }}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          elevation={0}
        />
  )
}

export default SearchComponent