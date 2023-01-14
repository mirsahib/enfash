import { Image, SafeAreaView, View } from 'react-native';
import React, { forwardRef, useImperativeHandle, ForwardedRef } from 'react';
import { useTheme, Text } from 'react-native-paper';
import ProfileData from '@utils/mock/ProfileData';
import { CanHandleRightHeaderPressed } from '../types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainNavParams } from '@navigation/utils/NavigationTypes';

const Profile = (props: {}, ref: ForwardedRef<CanHandleRightHeaderPressed>) => {
    const theme = useTheme();
    const navigation =
        useNavigation<NativeStackNavigationProp<MainNavParams>>();
    const gotoEditProfile = () => {
        navigation.navigate('EditProfile', { ...ProfileData });
    };
    useImperativeHandle(ref, () => ({
        gotoEditProfile
    }));

    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: 'center',
                backgroundColor: theme.colors.primaryContainer
            }}
        >
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: '5%'
                }}
            >
                <View
                    style={{
                        alignItems: 'center',
                        marginTop: '10%'
                    }}
                >
                    <Image
                        source={require('@assets/account.jpg')}
                        style={{ width: 120, height: 120, borderRadius: 60 }}
                    />
                </View>
                <View
                    style={{
                        backgroundColor: theme.colors.background,
                        padding: '4%',
                        borderRadius: 10,
                        marginVertical: '5%'
                    }}
                >
                    <Text style={{ color: theme.colors.secondary }}>Name </Text>
                    <Text>{ProfileData.name} </Text>
                </View>
                <View
                    style={{
                        backgroundColor: theme.colors.background,
                        padding: '4%',
                        borderRadius: 10,
                        marginBottom: '5%'
                    }}
                >
                    <Text style={{ color: theme.colors.secondary }}>
                        Email{' '}
                    </Text>
                    <Text>{ProfileData.email}</Text>
                </View>
                <View
                    style={{
                        backgroundColor: theme.colors.background,
                        padding: '4%',
                        borderRadius: 10,
                        marginBottom: '5%'
                    }}
                >
                    <Text style={{ color: theme.colors.secondary }}>
                        Phone{' '}
                    </Text>
                    <Text>{ProfileData.phone}</Text>
                </View>
                <View
                    style={{
                        backgroundColor: theme.colors.background,
                        padding: '4%',
                        borderRadius: 10,
                        marginBottom: '5%'
                    }}
                >
                    <Text style={{ color: theme.colors.secondary }}>
                        Address
                    </Text>
                    {ProfileData.addressBook.map((item, index) => (
                        <Text key={index}>
                            {item.title}: {' ' + item.address}
                        </Text>
                    ))}
                </View>
            </View>
        </SafeAreaView>
    );
};

export default forwardRef<CanHandleRightHeaderPressed, {}>(Profile);
