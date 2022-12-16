import { View, Text } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper';



const Header = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query: string) => setSearchQuery(query);

    return (

        <View style={{ width:'90%' }}>

            <Searchbar
                style={{ 
                    backgroundColor: '#E6E6E7',
                    width: '85%', 
                    height: 40, 
                    borderRadius: 10,
                    margin:0    
                }}
                inputStyle={{ fontSize: 16, padding: 0 }}
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />

        </View>
    )
}

export default Header