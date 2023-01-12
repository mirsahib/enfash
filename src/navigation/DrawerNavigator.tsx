import { createDrawerNavigator } from '@react-navigation/drawer';
import MainHeader from '@components/MainHeader';
import MainHeaderRight from '@components/MainHeaderRight';
import TabNavigator from './TabNavigator';
import { View } from 'react-native';
import MessageScreens from '@features/Messages';
import ProfileScreens from '@features/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerNavParams } from './utils/NavigationTypes';
import ProfileHeaderRight from '@features/Profile/components/ProfileHeaderRight';

const Drawer = createDrawerNavigator<DrawerNavParams>();
const Stack = createNativeStackNavigator();

const OrderStack = () => (
    <Stack.Navigator screenOptions={{animation:"slide_from_right"}}>
        <Stack.Screen
            name="OrderHistory"
            options={{ headerShown: false }}
            component={ProfileScreens.OrderHistory}
        />
        <Stack.Screen
            name="OrderDetails"
            options={{ headerShown: false }}
            component={ProfileScreens.OrderDetails}
        />
    </Stack.Navigator>
);



const DrawerNavigator = () => {
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
                    drawerLabel:"Profile",
                    headerTitle:"Profile",
                    headerRight: () => <ProfileHeaderRight />,
                    headerRightContainerStyle: { paddingHorizontal: '5%' }
                }}
                component={ProfileScreens.Profile}
            />
            <Drawer.Screen
                name="Order"
                options={{ drawerLabel: 'Order History' }}
                component={OrderStack}
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
