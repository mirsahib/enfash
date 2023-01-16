import {FlatList, View} from 'react-native';
import React from 'react';
import WishListCard from '../components/WishListCard';
import Layout from '@hoc/Layout';
import ProductData from '@utils/mock/ProductData'

const Wishlist = () => {
  return (
    <View style={{flex: 1, paddingHorizontal: '5%'}}>
      <FlatList
        data={ProductData}
        contentContainerStyle={{paddingVertical:'5%'}}
        ItemSeparatorComponent={()=><View style={{height:10}}/>}
        keyExtractor={item => item.id}
        renderItem={({item}) => <WishListCard image={item.image} title={item.title} price={item.price} rating={item.rating.rate}/>}
      />
    </View>
  );
};

export default Layout(Wishlist);
