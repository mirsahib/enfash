import { ImageBackground, Pressable, Share, View } from 'react-native';
import React from 'react';
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { Text, useTheme } from 'react-native-paper';
import IconComponent from '@components/IconComponent';

const CustomDrawer = (props: DrawerContentComponentProps) => {
    const theme = useTheme();

    const handleLogout = ()=>{
        props.navigation.closeDrawer()
    }

    const handleTellAFriend =async ()=>{
        try {
            await Share.share({
                message:
                    '',
            });
        } catch (error) {
            console.log(error)
        }
        props.navigation.closeDrawer()
    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{
                    backgroundColor: theme.colors.secondary
                }}
            >
                <ImageBackground
                    source={require('@assets/pattern.png')}
                    style={{ padding: 80, opacity: 0.5 }}
                ></ImageBackground>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: theme.colors.background,
                        paddingTop: 10
                    }}
                >
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View
                style={{
                    padding: 20,
                    borderTopWidth: 1,
                    borderTopColor: theme.colors.secondary
                    
                }}
            >
                <Pressable onPress={()=>handleTellAFriend()} style={{ flexDirection: 'row',marginBottom:20  }}>
                    <IconComponent
                        iconDirectory="AntDesign"
                        name="sharealt"
                        size={25}
                        color={theme.colors.secondary}
                        style={{ marginRight: 10}}
                    />
                    <Text>Tell a Friend </Text>
                </Pressable>
                <Pressable onPress={()=>handleLogout()} style={{ flexDirection: 'row' }}>
                    <IconComponent
                        iconDirectory="AntDesign"
                        name="logout"
                        size={25}
                        color={theme.colors.secondary}
                        style={{ marginRight: 10 }}
                    />
                    <Text>Log Out</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default CustomDrawer;
