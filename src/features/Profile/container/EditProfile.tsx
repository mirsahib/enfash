import { Image, TextInput, View } from 'react-native';
import React from 'react';
import Layout from '@hoc/Layout';
import { Text, useTheme } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import { EditProfileRouteProps } from '@navigation/utils/NavigationTypes';
import EditProfileTextInput from '../components/EditProfileTextInput';

const EditProfile = () => {
    const { params } = useRoute<EditProfileRouteProps>();
    //console.log(params);

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
            <View style={{flex:2}}>
                <EditProfileTextInput placeHolderText={params.name} />
                <EditProfileTextInput placeHolderText={params.email} />
                <EditProfileTextInput placeHolderText={params.phone} />
            </View>
        </View>
    );
};

export default Layout(EditProfile);
