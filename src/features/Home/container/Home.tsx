import { View } from 'react-native'
import React from 'react'
import styles from '../styles/main'
import { Button, useTheme } from 'react-native-paper'
import SearchComponent from '../components/SearchComponent';
import BannerComponent from '../components/BannerComponent';
import ProductComponent from '../components/ProductComponent';


const Home = () => {
    const theme = useTheme()
    
    return (
        <View style={styles.container}>
            {/* <SearchComponent/> */}
            <BannerComponent/>
            <ProductComponent/>
        </View>
    )
}

export default Home