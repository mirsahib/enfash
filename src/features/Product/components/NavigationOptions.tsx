import { Props } from '..'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import SearchComponent from '../../../components/SearchComponent'
import HeaderRight from './HeaderRight'

const NavigationOptions = (props:Props) => {

    const routeName = props.route.name
    console.log(routeName)
    let result:NativeStackNavigationOptions={}
    switch(routeName){
        case 'Product':
            result = {
            headerTitle: "Product Details",
            headerTitleAlign:'left',
            headerRight: () => <HeaderRight />
        }
            break
        case 'Cart':
            result = {}
            break
        default:
            throw new Error("Route name not supported")
    }
    return result
}

export default NavigationOptions