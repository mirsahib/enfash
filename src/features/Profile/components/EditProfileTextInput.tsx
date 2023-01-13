import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { useTheme } from 'react-native-paper';

type EditProfileTextInputProps = {
    title:string,
    placeHolderText: string
}

const EditProfileTextInput = (props:EditProfileTextInputProps) => {
    const theme = useTheme();
    const {title,placeHolderText} = props
    return (
        <View
            style={{
                backgroundColor: theme.colors.background,
                padding: '3%',
                borderRadius: 10,
                marginVertical: '2%'
            }}
        >
            <Text style={{ color: theme.colors.primary }}>{title} </Text>
            <TextInput
                placeholder={placeHolderText}
                placeholderTextColor={theme.colors.secondary}
                underlineColorAndroid={theme.colors.secondary}
            />
        </View>
    );
};

export default EditProfileTextInput;
