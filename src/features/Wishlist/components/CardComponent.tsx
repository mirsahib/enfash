import {View, Image, Pressable} from 'react-native';
import React from 'react';
import {useTheme, Text} from 'react-native-paper';
import IconComponent from '@components/IconComponent';
import {CardComponentPropsType} from '../type';
import IconButton from '@components/IconButton';

const CardComponent = (props: CardComponentPropsType) => {
  const theme = useTheme();
  const {image, title, price, rating} = props;

  const handleNav = () => {
    console.log('go to product');
  };
  return (
    <Pressable
      onPress={() => handleNav()}
      style={{backgroundColor: theme.colors.background, padding: '3%'}}>
      <View style={{flexDirection: 'row'}}>
        <Image source={{uri: image}} style={{flex: 1, height: 100}} />
        <View style={{flex: 2, marginHorizontal: '5%'}}>
          <Text
            variant="labelSmall"
            ellipsizeMode="tail"
            style={{flex: 1}}
            numberOfLines={2}>
            {title}
          </Text>
          <Text variant="labelLarge">$ {price}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <IconComponent
                iconDirectory="Entypo"
                name="star"
                size={18}
                color={theme.colors.tertiary}
              />
              <Text variant="labelLarge"> {rating}</Text>
            </View>
            <IconButton
              containerStyle={{
                backgroundColor: theme.colors.primaryContainer,
                width: 40,
                height: 40,
                borderRadius: 20,
                justifyContent:'center',
                alignItems:'center'
              }}
              onPress = {()=>console.log('Press')}
              iconDirectory="AntDesign"
              icon="shoppingcart"
              iconColor={theme.colors.tertiary}
              iconSize={25}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default CardComponent;
