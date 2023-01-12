import { Image, View } from 'react-native';
import React from 'react';
import {
    useTheme,
    Text,
} from 'react-native-paper';
import Layout from '@hoc/Layout';
import ProfileData from '@utils/mock/ProfileData';


const Profile = () => {
    const theme = useTheme();

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
                <Text style={{ color: theme.colors.secondary }}>Email </Text>
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
                <Text style={{ color: theme.colors.secondary }}>Phone </Text>
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
                <Text style={{ color: theme.colors.secondary }}>Address</Text>
                {ProfileData.addressBook.map((item,index)=>(
                    <Text key={index}>{item.type}: {' '+item.address}</Text>
                   
                ))}
            </View>
        </View>
    );
};

export default Layout(Profile);
