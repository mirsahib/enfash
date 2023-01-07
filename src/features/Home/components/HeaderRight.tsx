import React from 'react';
import {useTheme} from 'react-native-paper';
import IconButton from './IconButton';
const HeaderRight = () => {
  const theme = useTheme();
  return (
    <IconButton
      containerStyle={{
        width: 40,
        height: 40,
        backgroundColor: theme.colors.primaryContainer,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40 / 2,
      }}
      iconDirectory="FontAwesome5"
      icon="shopping-basket"
      iconColor={theme.colors.primary}
      iconSize={20}
    />
  );
};

export default HeaderRight;

