import React from 'react';
import { useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProductNavParams } from '@navigation/utils/NavigationTypes';
import IconButton from '@components/IconButton';

const ReviewHeaderRight = () => {
  const theme = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<ProductNavParams>>();

  const gotoWriteReviewScreen = () => {
    // three tier deep nested navigation
    navigation.navigate("WriteReview")
  };

  return (
    <IconButton
      iconDirectory="AntDesign"
      icon="edit"
      iconColor={theme.colors.primary}
      iconSize={25}
      onPress={() => gotoWriteReviewScreen()}
    />
  );
};

export default ReviewHeaderRight;
