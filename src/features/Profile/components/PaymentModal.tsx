import { Pressable, View } from 'react-native';
import React from 'react';
import { Modal, Portal, Text, TextInput, useTheme } from 'react-native-paper';
import IconComponent from '@components/IconComponent';

const PaymentModal = (props: {
    isModalVisible: boolean;
    setModalVisibility: () => void;
}) => {
    const theme = useTheme();
    const { isModalVisible, setModalVisibility } = props;

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
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 10
                    }}
                >
                    <Text>We Accept:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <IconComponent
                            iconDirectory="FontAwesome"
                            name="cc-visa"
                            color={theme.colors.primary}
                            size={25}
                            style={{ marginRight: 10 }}
                        />
                        <IconComponent
                            iconDirectory="FontAwesome"
                            name="cc-mastercard"
                            color={theme.colors.primary}
                            size={25}
                            style={{ marginRight: 10 }}
                        />
                        <IconComponent
                            iconDirectory="Fontisto"
                            name="american-express"
                            color={theme.colors.primary}
                            size={25}
                            style={{ marginRight: 10 }}
                        />
                    </View>
                </View>
                <TextInput 
                    style={{marginBottom:10}}
                    label={'Card Name'}
                    mode="outlined"
                    activeOutlineColor={theme.colors.tertiary}
                />
                <TextInput 
                    style={{marginBottom:10}}
                    label={'Card Number'}
                    mode="outlined"
                    activeOutlineColor={theme.colors.tertiary}
                />
                <TextInput 
                    style={{marginBottom:10}}
                    label={'Card CVV'}
                    mode="outlined"
                    activeOutlineColor={theme.colors.tertiary}
                />
                <TextInput 
                    style={{marginBottom:10}}
                    label={'Expiration Date'}
                    mode="outlined"
                    activeOutlineColor={theme.colors.tertiary}
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

export default PaymentModal;
