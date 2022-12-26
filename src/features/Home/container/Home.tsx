import React from 'react'
import styles from '../styles/main'
import { Text,  } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context';
import {  View } from 'react-native';
import CatagoryCard from '../components/CatagoryCard';
import { FlatList } from 'react-native-gesture-handler'
import ProductComponent from '../components/ProductComponent';
import FlatListHeader from '../components/FlatListHeader';

const catagories = [
    {
        id: '1',
        name: "men's clothing",
        icon: require("@assets/icons/tshirt.png"),
    },
    {
        id: '2',
        name: "women's clothing",
        icon: require("@assets/icons/dress.png"),
    }, {
        id: '3',
        name: 'electronics',
        icon: require("@assets/icons/responsive.png"),
    }, {
        id: '4',
        name: 'jewelry',
        icon: require("@assets/icons/jewelry.png"),
    }

]

const Home = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, paddingHorizontal: '5%'  }}>
                <FlatList
                    ListHeaderComponent={
                        <FlatListHeader />
                    }
                    ListFooterComponent={
                        <>
                            <Text variant='titleMedium'>Best Seller</Text>
                            <ProductComponent />
                        </>
                    }
                    ListHeaderComponentStyle={{
                        justifyContent:'space-evenly',
                        alignItems:'center'
                    }}
                    ListFooterComponentStyle={{
                        marginVertical:'5%'
                    }}
                    data={catagories}
                    numColumns={2}
                    columnWrapperStyle={{ flex: 1, justifyContent: 'space-around', margin: '2%' }}
                    keyExtractor={(item) => item.id}
                    renderItem={(item) => <CatagoryCard data={item.item} />}
                />
            </View>
        </SafeAreaView>
    )
}

export default Home