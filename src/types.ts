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

export type {
    Icondirectory,
    IconComponentProps
}