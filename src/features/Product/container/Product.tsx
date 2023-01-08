import {View, Image, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import {
  MainNavParams,
  ProductsRouteProps,
} from '@navigation/utils/NavigationTypes';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Button, Divider, Text, useTheme} from 'react-native-paper';
import {addToCartOnce} from '@store/cart';
import {useAppDispatch, useAppSelector} from '@store/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ReviewCard from '../components/ReviewCard';
import IconComponent from '@components/IconComponent';
import Layout from '@hoc/Layout';
import IconButton from '@components/IconButton';

const {width} = Dimensions.get('screen');

const Product = () => {
  const {params} = useRoute<ProductsRouteProps>();
  const theme = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<MainNavParams>>();
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.shoppingCart.itemList);
  const product = products.find(item => item.product?.id === params.id);

  const addItem = () => {
    dispatch(addToCartOnce(params));
  };
  const gotoReviewScreen = () => {
    navigation.navigate('ProductNav', {screen: 'Review'});
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}>
      <Image
        source={{uri: params.image}}
        style={{height: 400, width: '100%'}}
        resizeMode={'contain'}
      />
      <View
        style={{
          backgroundColor: theme.colors.primaryContainer,
          paddingHorizontal: '5%',
          paddingTop: '10%',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
          <Text
            variant="labelLarge"
            style={{flex: 1, paddingRight: '5%'}}
            adjustsFontSizeToFit
            numberOfLines={3}>
            {params.title}
          </Text>
          <IconButton
            containerStyle={{
              backgroundColor: theme.colors.background,
              width:40,
              height:40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            iconDirectory="MaterialIcons"
            icon="favorite-outline"
            iconColor={theme.colors.tertiary}
            iconSize={25}
            onPress={() => console.log('favorites')}
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          <IconComponent
            style={{marginRight:5}}
            iconDirectory="Entypo"
            name="star"
            size={20}
            color={theme.colors.primary}
          />
          <Text>{params.rating.rate}</Text>
        </View>

        <View style={{marginTop: '5%',marginBottom:"10%"}}>
          <Text
            variant="titleLarge"
            style={{fontWeight: '700', marginBottom: '5%'}}>
            ${params.price}
          </Text>
          <Text variant="titleMedium" style={{marginBottom: '5%'}}>
            Description
          </Text>
          <Text style={{ marginBottom: '5%'}}>
            {params.description}
          </Text>
          <Button mode="contained" onPress={() => addItem()} icon="cart">
            {product ? 'ITEM ADDED' : 'ADD TO CART'}
          </Button>
        </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text variant="titleMedium">Reviews ({params.rating.count})</Text>
            <Text
              style={{color: theme.colors.tertiary}}
              onPress={() => gotoReviewScreen()}>
              View All
            </Text>
          </View>
          <Divider style={{height: 2, backgroundColor: theme.colors.primary}} />
          <ReviewCard />
      </View>
    </ScrollView>
  );
};

export default Layout(Product);
