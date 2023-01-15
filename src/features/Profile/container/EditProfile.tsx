import { Image, Pressable, View } from 'react-native';
import React from 'react';
import Layout from '@hoc/Layout';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
    EditProfileRouteProps,
    MainNavParams
} from '@navigation/utils/NavigationTypes';
import { Text, TextInput, useTheme } from 'react-native-paper';
import IconComponent from '@components/IconComponent';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const EditProfile = () => {
    const { params } = useRoute<EditProfileRouteProps>();
    const navigation =
        useNavigation<NativeStackNavigationProp<MainNavParams>>();
    const theme = useTheme();
    const gotoManageAddress = () => {
        navigation.navigate('ManageAddress', params.addressBook);
    };
    return (
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
            <View style={{ flex: 2 }}>
                <View
                    style={{
                        padding: 10,
                        backgroundColor: theme.colors.background,
                        borderRadius: 10,
                        marginBottom:10

                    }}
                >
                    <TextInput
                        label={params.name}
                        mode="outlined"
                        activeOutlineColor={theme.colors.tertiary}
                    />
                </View>
                <View
                    style={{
                        padding: 10,
                        backgroundColor: theme.colors.background,
                        borderRadius: 10,
                        marginBottom:10
                    }}
                >
                    <TextInput
                        label={params.email}
                        mode="outlined"
                        activeOutlineColor={theme.colors.tertiary}
                    />
                </View>
                <View
                    style={{
                        padding: 10,
                        backgroundColor: theme.colors.background,
                        borderRadius: 10,
                        marginBottom:10

                    }}
                >
                    <TextInput
                        label={params.phone}
                        mode="outlined"
                        activeOutlineColor={theme.colors.tertiary}
                    />
                </View>
                <View
                    style={{
                        backgroundColor: theme.colors.background,
                        padding: '3%',
                        borderRadius: 10,
                        marginVertical: '2%',
                        marginBottom:10

                    }}
                >
                    <Pressable
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                        onPress={() => gotoManageAddress()}
                    >
                        <Text style={{ color: theme.colors.primary }}>
                            Manage Address
                        </Text>
                        <IconComponent
                            iconDirectory="MaterialIcons"
                            name="keyboard-arrow-right"
                            color={theme.colors.primary}
                            size={25}
                        />
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default Layout(EditProfile);
