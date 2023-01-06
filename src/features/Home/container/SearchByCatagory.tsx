import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  MainNavParams,
  SearchByCatagoryRouteProps,
} from '@navigation/utils/NavigationTypes';
import setNavigationOptions from '../hooks/setNavigationOption';
import Layout from '@hoc/Layout';
import ProductData from '@utils/mock/ProductData'
import ProductComponent from '../components/ProductComponent';

const SearchByCatagory = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainNavParams>>();
  const {params} = useRoute<SearchByCatagoryRouteProps>();
  const {headerTitle} = params;
  setNavigationOptions(navigation, {headerTitle: headerTitle});

  return (
    <ProductComponent/>
  );
};

export default Layout(SearchByCatagory);
