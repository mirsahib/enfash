import { View, Text } from 'react-native'
import React from 'react'

export type directory = "AntDesign"
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
    iconDirectory: directory,
    [key: string]: any
}

const IconComponent = (props: IconComponentProps) => {

    let Component = null

    switch (props.iconDirectory) {
        case "AntDesign":
            Component = require("react-native-vector-icons/AntDesign").default
            break
        case "Entypo":
            Component = require("react-native-vector-icons/Entypo").default
            break
        case "EvilIcons":
            Component = require("react-native-vector-icons/EvilIcons").default
            break
        case "Feather":
            Component = require("react-native-vector-icons/Feather").default
            break
        case "FontAwesome":
            Component = require("react-native-vector-icons/FontAwesome").default
            break
        case "FontAwesome5":
            Component = require("react-native-vector-icons/FontAwesome5").default
            break
        case "FontAwesome5Pro":
            Component = require("react-native-vector-icons/FontAwesome5Pro").default
            break
        case "Fontisto":
            Component = require("react-native-vector-icons/Fontisto").default
            break
        case "Foundation":
            Component = require("react-native-vector-icons/Foundation").default
            break
        case "Ionicons":
            Component = require("react-native-vector-icons/Ionicons").default
            break
        case "MaterialIcons":
            Component = require("react-native-vector-icons/MaterialIcons").default
            break
        case "Octicons":
            Component = require("react-native-vector-icons/Octicons").default
            break
        default:
            throw new Error("Icon directory not found")
    }
    return <Component {...props}/>
}

export default IconComponent