import { Pressable, View } from 'react-native';
import React, { useState } from 'react';
import { Text, useTheme } from 'react-native-paper';
import Layout from '@hoc/Layout';
import { FlatList } from 'react-native-gesture-handler';
import PaymentCard from '../components/PaymentCard';
import PaymentModal from '../components/PaymentModal';

const data = [{ id: '1' }, { id: '2' }];
const PaymentMethod = () => {
    const theme = useTheme();
    const [visible, setVisible] = useState(false);
    const hideModal = () => setVisible(false);
    const showModal = () => setVisible(true);
    return (
        <View
            style={{
                flex: 1,
                margin: '5%'
            }}
        >
          <PaymentModal isModalVisible={visible} setModalVisibility={hideModal}/>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={()=><View style={{height:10}}/>}
                renderItem={({ item }) => <PaymentCard />}
            />

            <Pressable
                style={{
                    backgroundColor: theme.colors.primary,
                    padding: '5%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10
                }}
                onPress={() => showModal()}
            >
                <Text
                    style={{ color: theme.colors.background }}
                    variant="titleSmall"
                >
                    Add New Card
                </Text>
            </Pressable>
        </View>
    );
};

export default Layout(PaymentMethod);
