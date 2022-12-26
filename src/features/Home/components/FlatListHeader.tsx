import { View } from 'react-native'
import React from 'react'
import { Searchbar, Text  } from 'react-native-paper'

const FlatListHeader = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = (query: string) => setSearchQuery(query);

    return (
        <View style={{marginVertical:'5%'}}>
            <Text variant='titleMedium' >Find the best deals,delivered to your door</Text>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={{ backgroundColor: 'white', borderRadius: 10,marginVertical:'2%' }}
                elevation={0}
                
            />
        </View>
    )
}

export default FlatListHeader