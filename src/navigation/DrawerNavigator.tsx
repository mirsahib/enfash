import { createDrawerNavigator } from '@react-navigation/drawer';
import MainHeader from '@components/MainHeader';
import MainHeaderRight from '@components/MainHeaderRight';
import TabNavigator from './TabNavigator';
import { View } from 'react-native';
import MessageScreens from '@features/Messages';
import ProfileScreens from '@features/Profile';
import { DrawerNavParams } from './utils/NavigationTypes';
import ProfileHeaderRight from '@features/Profile/components/ProfileHeaderRight';
import { useRef } from 'react';
import { CanHandleRightHeaderPressed } from '@features/Profile/types';
import CustomDrawer from './Components/CustomDrawer';
import IconComponent from '@components/IconComponent';
import { useTheme } from 'react-native-paper';

const Drawer = createDrawerNavigator<DrawerNavParams>();

const DrawerNavigator = () => {
    const theme = useTheme()
    const headerRightPressRef = useRef<CanHandleRightHeaderPressed>(null);
    const onHeaderRightPressed = () => {
        headerRightPressRef.current?.gotoEditProfile();
    };
    return (
        <Drawer.Navigator
            initialRouteName="TabNav"
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                drawerActiveBackgroundColor:theme.colors.tertiary,
                drawerActiveTintColor:theme.colors.background,
                drawerLabelStyle:{marginLeft:-20,fontSize:12},
            }}
        >
            <Drawer.Screen
                name="TabNav"
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: ({ color }) => (
                        <IconComponent
                            iconDirectory="AntDesign"
                            name="home"
                            size={25}
                            color={color}
                        />
                    ),
                    headerTitle: () => <MainHeader />,
                    headerTitleAlign: 'center',
                    headerStyle: {
                        height: 60
                    },
                    headerRight: () => <MainHeaderRight />,
                    headerRightContainerStyle: {
                        paddingHorizontal: '5%'
                    }
                }}
                component={TabNavigator}
            />
            <Drawer.Screen
                name="Profile"
                options={{
                    drawerLabel: 'Profile',
                    drawerIcon: ({ color }) => (
                        <IconComponent
                            iconDirectory="AntDesign"
                            name="user"
                            size={25}
                            color={color}
                        />
                    ),
                    headerTitle: 'Profile',
                    headerRight: (props) => (
                        <ProfileHeaderRight
                            {...props}
                            onPressed={onHeaderRightPressed}
                        />
                    ),
                    headerRightContainerStyle: { paddingHorizontal: '5%' }
                }}
            >
                {(props) => (
                    <ProfileScreens.Profile
                        ref={headerRightPressRef}
                        {...props}
                    />
                )}
            </Drawer.Screen>
            <Drawer.Screen
                name="Order"
                options={{
                    drawerIcon: ({ color }) => (
                        <IconComponent
                            iconDirectory="AntDesign"
                            name="gift"
                            size={25}
                            color={color}
                        />
                    ),
                    drawerLabel: 'Order History',
                    headerTitle: 'Order History'
                }}
                component={ProfileScreens.OrderHistory}
            />
            <Drawer.Screen
                name="PaymentMethod"
                options={{
                    drawerIcon: ({ color }) => (
                        <IconComponent
                            iconDirectory="AntDesign"
                            name="creditcard"
                            size={25}
                            color={color}
                        />
                    ),
                    drawerLabel: 'Payment Method',
                    headerTitle: 'Payment Method'
                }}
                component={ProfileScreens.PaymentMethod}
            />
            <Drawer.Screen
                name="TrackOrder"
                options={{
                    drawerLabel: 'Track Order',
                    drawerIcon: ({ color }) => (
                        <IconComponent
                            iconDirectory="Feather"
                            name="truck"
                            size={25}
                            color={color}
                        />
                    )
                }}
                component={ProfileScreens.TrackOrder}
            />
            <Drawer.Screen
                name="Promocodes"
                options={{
                    drawerIcon: ({ color }) => (
                        <IconComponent
                            iconDirectory="AntDesign"
                            name="tago"
                            size={25}
                            color={color}
                        />
                    )
                }}
                component={ProfileScreens.PromoCodes}
            />
            <Drawer.Screen
                name="FAQ"
                options={{drawerIcon: ({ color }) => (
                    <IconComponent
                        iconDirectory="AntDesign"
                        name="questioncircleo"
                        size={25}
                        color={color}
                    />
                )}}
                component={ProfileScreens.Faq}
            />
            <Drawer.Screen
                name="Message"
                options={{
                    drawerIcon: ({ color }) => (
                        <IconComponent
                            iconDirectory="AntDesign"
                            name="message1"
                            size={25}
                            color={color}
                        />
                    )
                }}
                component={MessageScreens.Message}
            />
        </Drawer.Navigator>
    );
};
export default DrawerNavigator;
