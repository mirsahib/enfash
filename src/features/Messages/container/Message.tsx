import {FlatList, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Layout from '@hoc/Layout';
import {IconButton, useTheme} from 'react-native-paper';
import TextContainer from '../components/TextContainer';
import {MessagePayloadType} from '../type';
import MessageData from '@utils/mock/Message';
import {useNavigation} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {TabNavParams} from '@navigation/utils/NavigationTypes';
import {setBottomNavigationOptions} from '@hooks/setNavigationOption';

const Message = () => {
  const [messages, setMessages] = useState<MessagePayloadType[]>(MessageData);
  const [input, setInput] = useState<string>('');
  const theme = useTheme();
  const navigation = useNavigation<BottomTabNavigationProp<TabNavParams>>();
  setBottomNavigationOptions(navigation, {tabBarStyle: {display: 'none'}});

  const addMessage = () => {
    let uuid = Math.floor(Math.random() * 100) + 1;
    const newMessage: MessagePayloadType = {
      id: uuid.toString(),
      text: input,
      type: 'SHOPPER',
    };
    setMessages([...MessageData, newMessage]);
    setInput('');
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        inverted
        data={messages}
        contentContainerStyle={{
          flexDirection: 'column-reverse',
          paddingTop: '1%',
          paddingHorizontal: '2%',
        }}
        renderItem={({item}) => <TextContainer {...item} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <View
        style={{
          backgroundColor: theme.colors.background,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <IconButton
          icon="paperclip"
          iconColor={theme.colors.secondary}
          size={25}
        />
        <TextInput
          style={{
            flex: 1,
            backgroundColor: theme.colors.primaryContainer,
            borderRadius: 30,
            paddingLeft: 20,
            color: theme.colors.primary,
          }}
          placeholder={'Text message... '}
          placeholderTextColor={theme.colors.secondary}
          value={input}
          onChangeText={text => setInput(text)}
          onSubmitEditing={addMessage}
        />
        <IconButton
          icon="arrow-up-circle"
          iconColor={theme.colors.primary}
          size={30}
          onPress={() => addMessage()}
        />
      </View>
    </View>
  );
};

export default Layout(Message);
