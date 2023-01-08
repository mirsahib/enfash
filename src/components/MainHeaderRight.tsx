import React from 'react';
import { useTheme } from 'react-native-paper';
import IconButton from '@components/IconButton';

const MainHeaderRight = () => {
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
      iconDirectory="Ionicons"
      icon="md-basket-outline"
      iconColor={theme.colors.primary}
      iconSize={25}
    />
  );
};

export default MainHeaderRight;
