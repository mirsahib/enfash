import {View} from 'react-native';
import React from 'react';
import {Searchbar, Text, useTheme} from 'react-native-paper';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainNavParams} from '@navigation/utils/NavigationTypes';

const FlatListHeader = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const theme = useTheme();
  const onChangeSearch = (query: string) => setSearchQuery(query);
  const navigation = useNavigation<NativeStackNavigationProp<MainNavParams>>();
  return (
    <View>
      {/* <Text variant="titleMedium">
        Find the best deals,delivered to your door
      </Text> */}
      <Searchbar
        placeholder="Search for products..."
        placeholderTextColor={theme.colors.secondary}
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          marginVertical: '2%',
        }}
        elevation={0}
        onFocus={() => navigation.navigate('Search')}
      />
    </View>
  );
};

export default FlatListHeader;
