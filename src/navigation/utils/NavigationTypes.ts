import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductType } from '@utils/containerTypes';
import { OrderStatusTypes } from '@features/Profile/types';
type AuthNavParams = {
    SignIn: any;
    Login: any;
};
type ProductNavParams = {
    Product: ProductType;
    Review: any;
    WriteReview: any;
};
type TabNavParams = {
    HomeTab: any;
    CartTab: any;
    WishlistTab: any;
};

type DrawerNavParams = {
    TabNav: NavigatorScreenParams<TabNavParams>;
    Profile:any,
    PaymentMethod: any;
    Order: any;
    Promocodes: any;
    TrackOrder: any;
    FAQ: any;
    Message: any;
    Logout: any;
};

type MainNavParams = {
    DrawerNav: NavigatorScreenParams<DrawerNavParams>;
    Search: any;
    SearchByCatagory: {
        headerTitle: string;
    };
    ProductNav: any;
    EditProfile:{
        name: string;
        email: string;
        phone: string
        addressBook:{address:string,type:string}[]
    };
    OrderDetails:{
        orderId: string;
        orderStatus: OrderStatusTypes;
        total: number;
        orderDate: string;
        productList: {
            product: ProductType;
            quantity: number;
        }[];
        address: string;
    };
};

//screen props
type AuthRouteProps = RouteProp<AuthNavParams>;
type ProductsRouteProps = RouteProp<ProductNavParams, 'Product'>;
type SearchByCatagoryRouteProps = RouteProp<MainNavParams, 'SearchByCatagory'>;
type TabRouteProps = RouteProp<TabNavParams>;
type EditProfileRouteProps = RouteProp<MainNavParams, 'EditProfile'>;
type OrderDetailsRouteProps = RouteProp<MainNavParams, 'OrderDetails'>;
//route props
type TabScreenProps = BottomTabScreenProps<TabNavParams>;
type ProductScreenProps = NativeStackScreenProps<ProductNavParams>;
type MainScreenProps = NativeStackScreenProps<MainNavParams>;

export type {
    AuthNavParams,
    ProductNavParams,
    TabNavParams,
    DrawerNavParams,
    MainNavParams,
    AuthRouteProps,
    ProductsRouteProps,
    TabRouteProps,
    OrderDetailsRouteProps,
    EditProfileRouteProps,
    SearchByCatagoryRouteProps,
    TabScreenProps,
    ProductScreenProps,
    MainScreenProps
};
