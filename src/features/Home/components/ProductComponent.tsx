import {View} from 'react-native';
import React from 'react';
import Card from './Card';
import {FlatList} from 'react-native-gesture-handler';
import {Divider, Text, useTheme} from 'react-native-paper';
import ProductData from '@utils/mock/ProductData'
const ProductComponent = () => {
  const theme = useTheme();
  return (
    <View >
      <FlatList
        ListHeaderComponent={
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text variant="titleMedium">Best Seller</Text>
              <Text style={{color:theme.colors.tertiary}}>View All</Text>
            </View>
            <Divider style={{height:2}}/>
            {/* <View style={{height: 2, backgroundColor: theme.colors.primary}} /> */}
          </>
        }
        ListHeaderComponentStyle={{
          paddingHorizontal: '5%',
          marginBottom: '5%',
        }}
        data={ProductData.splice(0,6)}
        numColumns={2}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'space-around',
          margin: '2%',
        }}
        keyExtractor={item => item.id}
        renderItem={item => <Card {...item.item} />}
      />
    </View>
  );
};

export default ProductComponent;
