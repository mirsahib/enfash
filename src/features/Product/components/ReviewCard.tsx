import {View} from 'react-native';
import React from 'react';
import {Avatar, Text, useTheme} from 'react-native-paper';
import {Rating} from 'react-native-ratings';

const ReviewCard = () => {
  const theme = useTheme();

  return (
    <View style={{marginVertical: '5%', padding: '5%'}}>
      {/* review container */}
      <View style={{flexDirection: 'row', marginBottom: '2%'}}>
        <Avatar.Text size={40} label="CW" />
        <View style={{alignItems: 'flex-start', marginLeft: '5%'}}>
          <Text>Cameroon Williamson</Text>
          <Rating
            type="custom"
            ratingColor={theme.colors.primary}
            ratingBackgroundColor={theme.colors.secondary}
            tintColor={theme.colors.primaryContainer}
            imageSize={20}
            ratingCount={5}
            readonly={true}
          />
        </View>
      </View>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        reiciendis accusamus quis dolorem quidem incidunt nesciunt quas deserunt
        minima pariatur suscipit, quos unde commodi alias repellat? Hic
        consequuntur quis animi.
      </Text>
    </View>
  );
};

export default ReviewCard;
