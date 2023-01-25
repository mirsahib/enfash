import {View, Image, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import {
  MainNavParams,
  ProductsRouteProps,
} from '@navigation/utils/NavigationTypes';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Button, Divider, Text, useTheme} from 'react-native-paper';
import {addToCart} from '@store/cart';
import {useAppDispatch, useAppSelector} from '@store/index';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ReviewCard from '../components/ReviewCard';
import IconComponent from '@components/IconComponent';
import Layout from '@hoc/Layout';
import IconButton from '@components/IconButton';
import Toast from 'react-native-toast-message';
import {addToWishlist} from '@store/wishlist'

const {width} = Dimensions.get('screen');

const Product = () => {
  const {params} = useRoute<ProductsRouteProps>();
  const theme = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<MainNavParams>>();
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.shoppingCart.itemList);
  const product = products.find(item => item.product?.id === params.id);
  const wishlist = useAppSelector(state=> state.wishlist)

  const addItem = () => {
    dispatch(addToCart(params));
  };
  const gotoReviewScreen = () => {
    navigation.navigate('ProductNav', {screen: 'Review'});
  };
  const handleAddtoWishlist = () => {
    Toast.show({
      type:"info",
      text1:"Item added to wishlist",
      text2:params.title
    })
    dispatch(addToWishlist(params))
  }
  const isInWishlist = ()=>{
    const item = wishlist.itemList.find(item => item.id === params.id)
    return item===undefined
  }
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: theme.colors.primaryContainer,
      }}>
      <Image
        source={{uri: params.image}}
        style={{height: 400, width: '100%'}}
        resizeMode={'contain'}
      />
      <View
        style={{
          backgroundColor: theme.colors.background,
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
              width: 40,
              height: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            iconDirectory="MaterialIcons"
            icon={isInWishlist()?"favorite-outline":"favorite"}
            iconColor={theme.colors.primary}
            iconSize={25}
            onPress={() => handleAddtoWishlist()}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <IconComponent
            style={{marginRight: 5}}
            iconDirectory="Entypo"
            name="star"
            size={20}
            color={theme.colors.primary}
          />
          <Text>{params.rating.rate}</Text>
        </View>
        <View style={{marginTop: '5%', marginBottom: '10%'}}>
          <Text
            variant="titleLarge"
            style={{fontWeight: '700', marginBottom: '5%'}}>
            ${params.price}
          </Text>
          <Text variant="titleMedium" style={{marginBottom: '5%'}}>
            Description
          </Text>
          <Text style={{marginBottom: '5%'}}>{params.description}</Text>
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
        <ReviewCard
          image="http://dummyimage.com/142x100.png/cc0000/ffffff"
          name="William Justin"
          ratingValue={3.5}
          reviewText={
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore placeat at ea culpa eius vitae quam? Iusto id non odio reiciendis consequatur expedita labore magni optio, cupiditate aliquam, perferendis minima.'
          }
          containnerStyle={{
            marginVertical:"5%"
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Layout(Product);
