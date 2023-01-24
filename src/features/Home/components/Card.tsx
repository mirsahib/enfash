import React from 'react';
import {useTheme, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainNavParams} from '@navigation/utils/NavigationTypes';
import {Image, Pressable, View} from 'react-native';
import IconButton from '@components/IconButton';
import { useAppDispatch, useAppSelector } from '@store/index';
import { addToWishlist } from '@store/wishlist';
import { ProductType } from '@features/Product/types';
import Toast from 'react-native-toast-message';


const CardComponent = (props: ProductType) => {
  const theme = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<MainNavParams>>();
  const dispatch = useAppDispatch()
  const wishlist = useAppSelector(state=>state.wishlist)
  
  const handleNav = () => {
    navigation.navigate('ProductNav', {
      screen: 'Product',
      params: {...props},
    });
  };

  const handleAddtoWishlist = () => {
    Toast.show({
      type:"success",
      text1:"Item added to wishlist",
      text2:props.title
    })
    dispatch(addToWishlist(props))
  }
  const isInWishlist = ()=>{
    const item = wishlist.itemList.find(item => item.id === props.id)
    return item!=undefined
  }

  return (
    <Pressable
      onPress={() => handleNav()}
      style={{backgroundColor: theme.colors.background,width: 160,padding:'5%',borderRadius:10}}>
      <Image
        source={{uri: props.image}}
        style={{flex: 1, height: 120, margin: '5%'}}
        resizeMode="contain"
      />
      <IconButton
        containerStyle={{
          backgroundColor: theme.colors.primaryContainer,
          position: 'absolute',
          top: 10,
          left: 120,
          padding: '2%',
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        iconDirectory="MaterialIcons"
        icon={isInWishlist()?"favorite":"favorite-outline"}
        iconColor={theme.colors.tertiary}
        iconSize={25}
        onPress={() => handleAddtoWishlist()}
      />
      <View style={{justifyContent: 'space-between'}}>
        <Text
          variant="labelSmall"
          ellipsizeMode="tail"
          style={{flex: 1}}
          numberOfLines={3}>
          {props.title}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems:'center',marginTop:'5%'}}>
          <Text variant="labelLarge">$ {props.price}</Text>
          <IconButton
            containerStyle={{
              backgroundColor: theme.colors.primaryContainer,
              padding: '5%',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            iconDirectory="FontAwesome5"
            icon="shopping-basket"
            iconColor={theme.colors.tertiary}
            iconSize={20}
            onPress={() => console.log('cart')}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default CardComponent;
