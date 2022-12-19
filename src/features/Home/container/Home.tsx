import { SafeAreaView } from 'react-native'
import React from 'react'
import styles from '../styles/main'
import { useTheme } from 'react-native-paper'
import BannerComponent from '../components/BannerComponent';
import ProductComponent from '../components/ProductComponent';


const Home = () => {
    const theme = useTheme()
    
    return (
        <SafeAreaView style={styles.container}>
            <BannerComponent/>
            <ProductComponent/>
        </SafeAreaView>
    )
}

export default Home