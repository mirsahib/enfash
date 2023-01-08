import { StyleProp, ViewStyle } from "react-native";

type Icondirectory = "AntDesign"
    | "Entypo"
    | "EvilIcons"
    | "Feather"
    | "FontAwesome"
    | "FontAwesome5"
    | "FontAwesome5Pro"
    | "Fontisto"
    | "Foundation"
    | "Ionicons"
    | "MaterialIcons"
    | "Octicons"
    | "Zocial"
    | "SimpleLineIcons"

type IconComponentProps = {
    iconDirectory: Icondirectory,
    [key: string]: any
}
type IconButtonPropsType = {
    containerStyle: StyleProp<ViewStyle>;
    iconDirectory: Icondirectory;
    icon: string;
    iconSize: number;
    iconColor: string;
    [key: string]: any; // rest of the pressable properties
  };

export type {
    Icondirectory,
    IconComponentProps,
    IconButtonPropsType
}