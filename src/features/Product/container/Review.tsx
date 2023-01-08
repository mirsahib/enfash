import {View} from 'react-native';
import React from 'react';
import Layout from '@hoc/Layout';
import ReviewCard from '../components/ReviewCard';
import {FlatList} from 'react-native-gesture-handler';
import ReviewData from '@utils/mock/ReviewData';
import {useTheme} from 'react-native-paper';

const Review = () => {
  const theme = useTheme();
  return (
    <View style={{flex: 1, paddingHorizontal: '5%'}}>
      <FlatList
        data={ReviewData.splice(0, 10)}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => (
          <View
            style={{backgroundColor: theme.colors.primaryContainer, height: 10}}
          />
        )}
        contentContainerStyle={{
          paddingVertical: '5%',
        }}
        renderItem={({item}) => (
          <ReviewCard
            image={item.image}
            name={item.name}
            ratingValue={item.ratingValue}
            reviewText={item.reviewText}
            containnerStyle={{
              backgroundColor: 'white',
              padding: '5%',
              borderRadius: 10
            }}
          />
        )}
      />
    </View>
  );
};

export default Layout(Review);
