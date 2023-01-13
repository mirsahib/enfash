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

const Drawer = createDrawerNavigator<DrawerNavParams>();

const DrawerNavigator = () => {
    const headerRightPressRef = useRef<CanHandleRightHeaderPressed>(null)
    const onHeaderRightPressed =()=>{
        headerRightPressRef.current?.gotoEditProfile()
    }
    return (
        <Drawer.Navigator initialRouteName="TabNav">
            <Drawer.Screen
                name="TabNav"
                options={{
                    drawerLabel: 'Home',
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
                    headerTitle: 'Profile',
                    headerRight: (props) => <ProfileHeaderRight {...props} onPressed={onHeaderRightPressed} />,
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
                options={{ drawerLabel: 'Order History' }}
                component={ProfileScreens.OrderHistory}
            />
            <Drawer.Screen
                name="PaymentMethod"
                options={{}}
                component={ProfileScreens.PaymentMethod}
            />
            <Drawer.Screen
                name="TrackOrder"
                options={{}}
                component={ProfileScreens.TrackOrder}
            />
            <Drawer.Screen
                name="Promocodes"
                options={{}}
                component={ProfileScreens.PromoCodes}
            />
            <Drawer.Screen
                name="FAQ"
                options={{}}
                component={ProfileScreens.Faq}
            />
            <Drawer.Screen
                name="Message"
                options={{}}
                component={MessageScreens.Message}
            />
            <Drawer.Screen
                name="Logout"
                // listeners={({navigation, route}) => ({
                //   drawerItemPress: e => {
                //     console.log('Logout clicked');
                //   },
                // })}
                options={{}}
                component={View}
            />
        </Drawer.Navigator>
    );
};
export default DrawerNavigator;
