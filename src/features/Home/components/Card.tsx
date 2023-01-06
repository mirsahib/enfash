import React from 'react';
import {useTheme, Text, IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Card} from 'react-native-paper';
import {MainNavParams} from '@navigation/utils/NavigationTypes';
import {CardProps} from '../types';
import {Image, Pressable} from 'react-native';
import IconComponent from '@components/IconComponent';

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
    <Card
      onPress={() => handleNav()}
      style={{width: 160, backgroundColor: theme.colors.background}}>
      <Image
        source={{uri: props.data.image}}
        style={{flex: 1, height: 120, margin: '5%'}}
        resizeMode="contain"
      />
      <Pressable
        onPress={() => console.log('favorite')}
        style={{
          backgroundColor: theme.colors.primaryContainer,
          position: 'absolute',
          top: 10,
          left: 120,
          padding:'2%',
          borderRadius: 20,
          justifyContent:'center',
          alignItems:'center'
        }}>
        <IconComponent
          iconDirectory="MaterialIcons"
          name="favorite-outline"
          size={25}
          color={theme.colors.tertiary}
        />
      </Pressable>
      <Card.Content>
        <Text
          variant="labelMedium"
          ellipsizeMode="tail"
          style={{flex: 1}}
          numberOfLines={3}>
          {props.data.title}
        </Text>
        <Text variant="labelLarge">$ {props.data.price}</Text>
      </Card.Content>
    </Card>
  );
};

export default CardComponent;
