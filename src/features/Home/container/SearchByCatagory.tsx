import {View, FlatList} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  MainNavParams,
  SearchByCatagoryRouteProps,
} from '@navigation/utils/NavigationTypes';
import setNavigationOptions from '../hooks/setNavigationOption';
import Layout from '@hoc/Layout';
import ProductData from '@utils/mock/ProductData';
import CardComponent from '../components/Card';

const SearchByCatagory = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainNavParams>>();
  const {params} = useRoute<SearchByCatagoryRouteProps>();
  const {headerTitle} = params;
  setNavigationOptions(navigation, {headerTitle: headerTitle});

  return (
    <View>
      <FlatList
        data={ProductData}
        numColumns={2}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'space-around',
          margin: '2%',
        }}
        keyExtractor={item => item.id}
        renderItem={item => <CardComponent data={item.item} />}
      />
    </View>
  );
};

export default Layout(SearchByCatagory);
