import {Pressable, View} from 'react-native';
import React from 'react';
import Layout from '@hoc/Layout';
import {Text, TextInput, useTheme} from 'react-native-paper';
import IconComponent from '@components/IconComponent';
import {Rating} from 'react-native-ratings';

const WriteReview = () => {
  const theme = useTheme();
  const [text, setText] = React.useState('');

  return (
    <View
      style={{
        flex: 1,
        margin: '5%',
        paddingHorizontal: '5%',
        backgroundColor: theme.colors.background,
      }}>
      <View style={{flex: 2, marginVertical:'5%',alignItems: 'center'}}>
        <View
          style={{
            width: 160,
            height: 160,
            borderRadius: 160 / 2,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.primaryContainer,
          }}>
          <IconComponent
            iconDirectory="FontAwesome5"
            name="grin-stars"
            size={120}
            color={theme.colors.primary}
          />
        </View>
        <Text variant="headlineSmall" style={{textAlign: 'center'}}>
          Please rate our product and service!
        </Text>
        <Rating
          type="custom"
          ratingColor={theme.colors.primary}
          ratingBackgroundColor={theme.colors.secondary}
          tintColor={theme.colors.background}
          imageSize={50}
          startingValue={0}
          ratingCount={5}
          readonly={true}
        />
      </View>
      <View style={{flex: 1}}>
        <TextInput
          mode="outlined"
          placeholder="Enter your comment..."
          multiline={true}
          numberOfLines={5}
          value={text}
          outlineColor={'white'}
          style={{backgroundColor: theme.colors.primaryContainer}}
          onChangeText={text => setText(text)}
        />
      </View>
      <View style={{flex:1}}>
        <Pressable
          style={{
            width: '100%',
            padding: '5%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: theme.colors.primary,
          }}>
          <Text style={{color: theme.colors.background}} variant="titleMedium">
            Submit
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Layout(WriteReview);
