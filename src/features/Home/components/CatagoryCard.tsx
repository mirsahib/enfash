import { MainNavParams } from '@navigation/utils/NavigationTypes';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import { Card,Text, useTheme } from 'react-native-paper';
import { CatagoryCardProps } from '../types';

const CatagoryCard = (props:CatagoryCardProps) => {
    const {id,name,icon} = props;
    const theme = useTheme()
    const navigation = useNavigation<NativeStackNavigationProp<MainNavParams>>()
    const handleNavigation= () => {
       navigation.navigate("SearchByCatagory",{headerTitle:name})
    }
    return (
        <Card onPress={() => handleNavigation()} style={{ width: 160, backgroundColor: theme.colors.background }}>
            {/* @ts-ignore */}
            <Image source={icon} style={{ resizeMode: 'contain',width:100,height:100,alignSelf:'center',marginVertical:'5%' }} />
            <Card.Content>
                <Text variant='titleSmall' style={{ flex: 1 }} >{name}</Text>
            </Card.Content>
        </Card>
    )
}

export default CatagoryCard