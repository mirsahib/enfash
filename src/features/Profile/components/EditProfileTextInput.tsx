import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { useTheme } from 'react-native-paper';

type EditProfileTextInputProps = {
    placeHolderText: string
}

const EditProfileTextInput = (props:EditProfileTextInputProps) => {
    const theme = useTheme();
    const {placeHolderText} = props
    return (
        <View
            style={{
                backgroundColor: theme.colors.background,
                padding: '4%',
                borderRadius: 10,
                marginVertical: '5%'
            }}
        >
            <Text style={{ color: theme.colors.primary }}>Name </Text>
            <TextInput
                placeholder={placeHolderText}
                placeholderTextColor={theme.colors.secondary}
                underlineColorAndroid={theme.colors.secondary}
            />
        </View>
    );
};

export default EditProfileTextInput;
