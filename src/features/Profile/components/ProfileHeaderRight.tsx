import React from 'react';
import { useTheme } from 'react-native-paper';
import IconButton from '@components/IconButton';
import { ProfileRightHeaderProps } from '../types';

const ProfileHeaderRight = (props:ProfileRightHeaderProps) => {
    const theme = useTheme();
    // const navigation =
    //     useNavigation<NativeStackNavigationProp<MainNavParams>>();

    // const gotoWriteReviewScreen = () => {
    //     // three tier deep nested navigation
    //     navigation.navigate("EditProfile");
    // };
    const {setIsHeaderRightPressed} = props

    return (
        <IconButton
            iconDirectory="AntDesign"
            icon="edit"
            iconColor={theme.colors.primary}
            iconSize={25}
            onPress={() =>setIsHeaderRightPressed(state=>!state)}
        />
    );
};

export default ProfileHeaderRight;
