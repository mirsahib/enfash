import { TextInput, Pressable } from 'react-native';
import React from 'react';
import { Text, useTheme, Modal, Portal } from 'react-native-paper';
import { AddAddressPropsType } from '../types';

const AddAddress = (props:AddAddressPropsType) => {

    const theme = useTheme();
    const {isModalVisible,setModalVisibility} = props

    return (
        <Portal>
            <Modal
                visible={isModalVisible}
                onDismiss={setModalVisibility}
                contentContainerStyle={{
                    backgroundColor: 'white',
                    padding: '5%',
                    margin: '5%'
                }}
            >
                <Text>Title</Text>
                <TextInput
                    placeholder={'Enter title...'}
                    placeholderTextColor={theme.colors.secondary}
                    underlineColorAndroid={theme.colors.secondary}
                />
                <Text>Address</Text>
                <TextInput
                    placeholder={'Enter address...'}
                    placeholderTextColor={theme.colors.secondary}
                    underlineColorAndroid={theme.colors.secondary}
                />
                <Pressable
                    style={{
                        backgroundColor: theme.colors.primary,
                        padding: '5%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        marginTop: '5%'
                    }}
                >
                    <Text
                        style={{ color: theme.colors.background }}
                        variant="titleSmall"
                    >
                        Submit
                    </Text>
                </Pressable>
            </Modal>
        </Portal>
    );
};

export default AddAddress;
