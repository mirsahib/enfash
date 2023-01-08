import {View} from 'react-native';
import React from 'react';
import {Avatar, Text, useTheme} from 'react-native-paper';
import {Rating} from 'react-native-ratings';
import { ReviewCardPropsType } from '../types';
const ReviewCard = (props:ReviewCardPropsType) => {
  const theme = useTheme();
  const {image,name,ratingValue,reviewText,containnerStyle} = props;

  return (
    <View style={containnerStyle}>
      <View style={{flexDirection: 'row', marginBottom: '2%'}}>
        <Avatar.Image size={40} source={{uri:image}} />
        <View style={{alignItems: 'flex-start', marginLeft: '5%'}}>
          <Text>{name}</Text>
          <Rating
            type="custom"
            ratingColor={theme.colors.primary}
            ratingBackgroundColor={theme.colors.secondary}
            tintColor={theme.colors.background}
            imageSize={20}
            startingValue={ratingValue}
            ratingCount={5}
            readonly={true}
          />
        </View>
      </View>
      <Text>
        {reviewText}
      </Text>
    </View>
  );
};

export default ReviewCard;
