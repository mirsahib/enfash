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
// type ProfileNavParams = {
//   Profile: any;
//   OrderHistory: any;
//   OrderDetails: {
//     orderId: string;
//     orderStatus: OrderStatusTypes;
//     total: number;
//     orderDate: string;
//     productList: {
//       product: ProductType;
//       quantity: number;
//     }[];
//     address: string;
//   };
//   Payment: any;
//   Address: any;
//   PromoCode: any;
//   TrackOrder: any;
//   Faq: any;
// };
type TabNavParams = {
    HomeTab: any;
    CartTab: any;
    WishlistTab: any;
};
type OrderNavParams = {
    OrderHistory: any;
    OrderDetails: {
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
type DrawerNavParams = {
    TabNav: TabNavParams;
    Profile: {
        onPressRight:()=>void
    };
    PaymentMethod: any;
    Order: NavigatorScreenParams<OrderNavParams>;
    Promocodes: any;
    TrackOrder: any;
    FAQ: any;
    Message: any;
    Logout: any;
};

type MainNavParams = {
    DrawerNav: DrawerNavParams;
    Search: any;
    SearchByCatagory: {
        headerTitle: string;
    };
    ProductNav: any;
    EditProfile:any;
    //AccountNav: NavigatorScreenParams<ProfileNavParams>;
};

//screen props
type AuthRouteProps = RouteProp<AuthNavParams>;
type ProductsRouteProps = RouteProp<ProductNavParams, 'Product'>;
type SearchByCatagoryRouteProps = RouteProp<MainNavParams, 'SearchByCatagory'>;
type TabRouteProps = RouteProp<TabNavParams>;
//type OrderDetailsRouteProps = RouteProp<ProfileNavParams, 'OrderDetails'>;
type OrderDetailsRouteProps = RouteProp<OrderNavParams, 'OrderDetails'>;
//route props
type TabScreenProps = BottomTabScreenProps<TabNavParams>;
type ProductScreenProps = NativeStackScreenProps<ProductNavParams>;
type MainScreenProps = NativeStackScreenProps<MainNavParams>;
//type ProfileScreenProps = NativeStackScreenProps<ProfileNavParams>;

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
    SearchByCatagoryRouteProps,
    TabScreenProps,
    ProductScreenProps,
    MainScreenProps
    // ProfileScreenProps,
};
