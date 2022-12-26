import React from 'react'
import styles from '../styles/main'
import { Searchbar, Text, useTheme } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import Card from '../components/Card'
import { FlatList } from 'react-native-gesture-handler'
import data from '../utils/data'

const catagories = [
    {
        id: '1',
        name: "men's clothing"
    },
    {
        id: '2',
        name: "women's clothing"
    }, {
        id: '3',
        name: 'electronics'
    }, {
        id: '4',
        name: 'jewelery'
    }

]

const Home = () => {
    const theme = useTheme()
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query: string) => setSearchQuery(query);




    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, padding: '5%', justifyContent: 'space-evenly' }}>
                <Text variant='titleMedium' >Find the best deals,delivered to your door</Text>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={{ backgroundColor: 'white', borderRadius: 10 }}
                    elevation={0}
                />
                <View>
                    <FlatList
                        data={catagories}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        ItemSeparatorComponent={() => <View style={{ width: 10, }}></View>}
                        renderItem={(item) => {
                            return (
                                <View style={{justifyContent:'center',alignItems:'center', backgroundColor: 'white',width:80,height:30 }}>
                                    <Text style={{fontWeight:'bold'}} adjustsFontSizeToFit>{item.item.name}</Text>
                                </View>
                            )
                        }}
                    />
                </View>

            </View>


            <View style={{ flex: 3 }}>
                <FlatList
                    data={data}
                    numColumns={2}
                    columnWrapperStyle={{ flex: 1, justifyContent: 'space-around', marginVertical: '2%', marginHorizontal: '5%' }}
                    keyExtractor={(item) => item.id}
                    renderItem={(item) => <Card data={item.item} />}
                />
            </View>

        </SafeAreaView>
    )
}

export default Home