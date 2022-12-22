import { View, Text, TouchableOpacity, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import styles, { buttonStyle } from '@styles/components'

type CounterButtonProps = {
  buttonLeftAction:()=>void,
  buttonRightAction:()=>void,
  leftBtnIcon?: string,
  rightBtnIcon?: string,
  iconSize?: number | undefined,
  textSize?: number | undefined,
  defaultValue: number | undefined,
  borderWidth?: number | undefined,
  buttonWidth?: number | undefined,
  buttonheight?: number | undefined
  buttonColor?: string | undefined,
  iconColor?: string | undefined,
  textColor?: string | undefined,
  buttonRadius?: number | undefined
  buttonContainerStyle?: ViewStyle
}


const CounterButton = (props: CounterButtonProps) => {

  return (
    <View
      style={[styles.button_container, props.buttonContainerStyle]}>
      <TouchableOpacity onPress={() => props.buttonLeftAction()} style={buttonStyle({ borderWidth: props.borderWidth ?? 1, buttonHeight: props.buttonheight ?? 25, buttonWidth: props.buttonWidth ?? 40, buttonColor: props.buttonColor ?? '#D9D9D9', buttonRadius: props.buttonRadius ?? 10 }).btnRight}>
        <Icon name={props.leftBtnIcon ?? 'minus'} size={props.iconSize ?? 20} color={props.iconColor ?? "black"} />
      </TouchableOpacity>
      <View style={buttonStyle({ buttonHeight: props.buttonheight ?? 25, buttonWidth: props.buttonWidth ?? 40, buttonColor: props.buttonColor ?? '#D9D9D9', borderWidth: props.borderWidth ?? 1 }).textContainer}>
        <Text style={{ fontSize: props.textSize ?? 16, color: props.textColor ?? "black" }}>{props.defaultValue}</Text>
      </View>
      <TouchableOpacity onPress={() => props.buttonRightAction()} style={buttonStyle({ borderWidth: props.borderWidth ?? 1, buttonHeight: props.buttonheight ?? 25, buttonWidth: props.buttonWidth ?? 40, buttonColor: props.buttonColor ?? '#D9D9D9', buttonRadius: props.buttonRadius ?? 10 }).btnLeft}>
        <Icon name={props.leftBtnIcon ?? 'plus'} size={props.iconSize ?? 20} color={props.iconColor ?? "black"} />
      </TouchableOpacity>
    </View>
  )
}


export const CounterButtonRounded = (props: CounterButtonProps) => {
  return (
    <View
      style={[styles.button_container, props.buttonContainerStyle]}>
      <TouchableOpacity onPress={() => props.buttonLeftAction()} style={[
        buttonStyle({buttonColor:props.buttonColor??'white',buttonWidth:props.buttonWidth??20,buttonHeight:props.buttonheight??20}).btnRight,{borderRadius:10}]} >
        <Icon name={props.leftBtnIcon ?? 'minus'} size={props.iconSize ?? 20} color={props.iconColor ?? "black"} />
      </TouchableOpacity>
      <View style={{ marginHorizontal: 15 }}>
        <Text style={{ fontSize: props.textSize ?? 16, color: props.textColor ?? "black" }}>{props.defaultValue}</Text>
      </View>
      <TouchableOpacity onPress={() => props.buttonRightAction()} style={[buttonStyle({buttonColor:props.buttonColor??'black',buttonWidth:props.buttonWidth??20,buttonHeight:props.buttonheight??20}).btnLeft,{borderRadius:10}]} >
        <Icon name={props.leftBtnIcon ?? 'plus'} size={props.iconSize ?? 20} color={props.iconColor ?? "white"} />
      </TouchableOpacity>
    </View>
  )
}

export default CounterButton