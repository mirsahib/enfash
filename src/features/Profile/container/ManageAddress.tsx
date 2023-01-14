import { FlatList, Pressable, View } from 'react-native';
import React, { useState } from 'react';
import Layout from '@hoc/Layout';
import { Text, useTheme } from 'react-native-paper';
import { ManageAddressRouteProps } from '@navigation/utils/NavigationTypes';
import { useRoute } from '@react-navigation/native';
import AddAddress from '../components/AddAddress';
import AddressCard from '../components/AddressCard';

const ManageAddress = () => {
    const { params } = useRoute<ManageAddressRouteProps>();
    const [addressBook, setAddressBook] = useState(params);
    const theme = useTheme();
    const [visible, setVisible] = useState(false);
    const hideModal = () => setVisible(false);
    const showModal = () => setVisible(true);
    const onSelectCard = () => {};



    return (
        <View
            style={{
                flex: 1,
                padding: '5%'
            }}
        >
            <AddAddress
                isModalVisible={visible}
                setModalVisibility={hideModal}
            />

            <FlatList
                data={addressBook}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <AddressCard
                            title={item.title}
                            address={item.address}
                            status={item.status}
                            selectCard={onSelectCard}
                        />
                    );
                }}
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
                    Add Address
                </Text>
            </Pressable>
        </View>
    );
};

export default Layout(ManageAddress);
