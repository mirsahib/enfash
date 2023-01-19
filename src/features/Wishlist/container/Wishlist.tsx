import { FlatList, View } from 'react-native';
import React from 'react';
import WishListCard from '../components/WishListCard';
import Layout from '@hoc/Layout';
import { useAppSelector } from '@store/index';
import IconComponent from '@components/IconComponent';
import { Button, Text, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Wishlist = () => {
    const theme = useTheme()
    const wishlist = useAppSelector((state) => state.wishlist);
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, paddingHorizontal: '5%' }}>
            {wishlist.itemList.length > 0 ? (
                <FlatList
                    data={wishlist.itemList}
                    contentContainerStyle={{ paddingVertical: '5%' }}
                    ItemSeparatorComponent={() => (
                        <View style={{ height: 10 }} />
                    )}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <WishListCard {...item} />}
                />
            ) : (
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <IconComponent
                        iconDirectory="Foundation"
                        name="clipboard-notes"
                        size={60}
                        color={theme.colors.primary}
                    />
                    <Text variant="titleMedium">Your wishlist is empty!</Text>
                    <Text style={{ textAlign: 'center', margin: '5%' }}>
                        Tab heart button to start saving your favorite product
                    </Text>
                    <Button mode="outlined" onPress={()=>navigation.goBack()}>
                        Add Now
                    </Button>
                </View>
            )}
        </View>
    );
};

export default Layout(Wishlist);
