import React from 'react';
import {View} from 'react-native';
import CatagoryCard from '../components/CatagoryCard';
import {FlatList} from 'react-native-gesture-handler';
import ProductComponent from '../components/ProductComponent';
import FlatListHeader from '../components/FlatListHeader';
import Layout from '@hoc/Layout';
import CatagoryData from '@utils/mock/CatagoryData';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        ListHeaderComponent={<FlatListHeader />}
        ListFooterComponent={<ProductComponent />}
        ListHeaderComponentStyle={{
            paddingHorizontal: '5%',
            marginVertical: '5%',
        }}
        ListFooterComponentStyle={{
          marginVertical: '5%',
        }}
        data={CatagoryData}
        numColumns={2}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'space-around',
          margin: '2%',
        }}
        keyExtractor={item => item.id}
        renderItem={item => <CatagoryCard {...item.item} />}
      />
    </View>
  );
};

export default Layout(Home);
