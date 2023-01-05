import {View} from 'react-native';
import React from 'react';
import {Text, useTheme} from 'react-native-paper';
import { MessagePayloadType } from '../type';

const TextContainer = (props: MessagePayloadType) => {
  const {text,type} = props;
  const theme = useTheme();
  return (
    <View
      style={{
        backgroundColor: type==="SELLER"?theme.colors.background:theme.colors.tertiary,
        borderRadius: 10,
        paddingHorizontal: '2%',
        paddingVertical: '1%',
        marginVertical:'1%',
        alignSelf:type==="SELLER"?"flex-start":"flex-end"
      }}>
      <Text style={{color: type==="SELLER"?theme.colors.primary:theme.colors.background}}>{text}</Text>
    </View>
  );
};

export default TextContainer;
