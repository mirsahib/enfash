import React from 'react';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {ProductScreenProps} from './NavigationTypes';
import MainHeaderRight from '@components/MainHeaderRight';

const ProductNavigatorOptions = (props: ProductScreenProps) => {
  const routeName = props.route.name;
  let result: NativeStackNavigationOptions = {};
  switch (routeName) {
    case 'Product':
      result = {
        animation: 'slide_from_right',
        headerTitle: 'Product Details',
        headerTitleAlign: 'left',
        headerRight: () => <MainHeaderRight />,
      };
      break;
    case 'Review':
      result = {
        animation: 'slide_from_right',
        headerTitle: 'Reviews',
        headerTitleAlign: 'left',
      };
      break;
    default:
      throw new Error('Route name not supported');
  }
  return result;
};

export default ProductNavigatorOptions;
