import { MainNavParams } from '@navigation/utils/NavigationTypes';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import { Card,Text, useTheme } from 'react-native-paper';

type CatagoryCardProps = {
    data:{
        id:string,
        name:string,
        icon:string
    }
}

const CatagoryCard = (props:CatagoryCardProps) => {
    const theme = useTheme()
    const navigation = useNavigation<NativeStackNavigationProp<MainNavParams>>()
    const handleNav= () => {
       // navigation.navigate('ProductNav', { screen: 'Product', params: { ...props.data } })
    }
    return (
        <Card onPress={() => handleNav()} style={{ width: 160, backgroundColor: theme.colors.background }}>
            {/* @ts-ignore */}
            <Image source={props.data.icon} style={{ resizeMode: 'contain',width:100,height:100,alignSelf:'center',marginVertical:'5%' }} />
            <Card.Content>
                <Text variant='titleSmall' ellipsizeMode='tail' style={{ flex: 1 }} numberOfLines={2}>{props.data.name}</Text>
            </Card.Content>
        </Card>
    )
}

export default CatagoryCard