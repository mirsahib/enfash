import React from 'react'
import styles from '../styles/main'
import { Searchbar, Text, useTheme } from 'react-native-paper'
import BannerComponent from '../components/BannerComponent';
import ProductComponent from '../components/ProductComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';


const Home = () => {
    const theme = useTheme()
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query:string) => setSearchQuery(query);
  

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, padding: '5%' }}>
                <Text variant='titleMedium' style={{marginVertical:'5%',fontFamily:'Roboto' }}>Find the best deals,delivered to your door</Text>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={{backgroundColor:'white',borderRadius:10}}
                    elevation={0}
                />

            </View>
            <ProductComponent />
        </SafeAreaView>
    )
}

export default Home