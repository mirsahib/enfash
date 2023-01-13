import React from 'react';
import { useTheme } from 'react-native-paper';
import IconButton from '@components/IconButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainNavParams } from '@navigation/utils/NavigationTypes';

const MainHeaderRight = () => {
  const theme = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<MainNavParams>>()

  const gotoCartScreen = ()=>{
    // three tier deep nested navigation
    navigation.navigate("DrawerNav",{screen:"TabNav",params:{screen:"CartTab"}})
  }

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
      onPress={() =>gotoCartScreen()}
    />
  );
};

export default MainHeaderRight;
