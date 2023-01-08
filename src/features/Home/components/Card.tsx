import React from 'react';
import {useTheme, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainNavParams} from '@navigation/utils/NavigationTypes';
import {CardProps} from '../types';
import {Image, Pressable, View} from 'react-native';
import IconButton from '@components/IconButton';

const CardComponent = (props: CardProps) => {
  const theme = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<MainNavParams>>();
  const handleNav = () => {
    navigation.navigate('ProductNav', {
      screen: 'Product',
      params: {...props.data},
    });
  };
  return (
    <Pressable
      onPress={() => handleNav()}
      style={{backgroundColor: theme.colors.background,width: 160,padding:'5%',borderRadius:10}}>
      <Image
        source={{uri: props.data.image}}
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
        icon="favorite-outline"
        iconColor={theme.colors.tertiary}
        iconSize={25}
        onPress={() => console.log('favorites')}
      />
      <View style={{justifyContent: 'space-between'}}>
        <Text
          variant="labelSmall"
          ellipsizeMode="tail"
          style={{flex: 1}}
          numberOfLines={3}>
          {props.data.title}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems:'center',marginTop:'5%'}}>
          <Text variant="labelLarge">$ {props.data.price}</Text>
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
