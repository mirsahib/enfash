import {View} from 'react-native';
import React from 'react';
import { Avatar, Text, useTheme } from 'react-native-paper';

const MainHeader = () => {
  const theme = useTheme();
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Avatar.Image size={30} source={require('@assets/account.jpg')} />
      <View style={{marginHorizontal: '5%'}}>
        <Text variant="titleMedium">Hello, William</Text>
        <Text variant="labelSmall" style={{color: theme.colors.tertiary}}>
          123,South Street,NY
        </Text>
      </View>
    </View>
  );
};

export default MainHeader;
