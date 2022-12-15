import { View, Text, TouchableOpacity, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import styles,{buttonStyle} from '../styles/component'

type CounterButtonProps = {
  leftBtnIcon?: string,
  rightBtnIcon?: string,
  iconSize?: number | undefined,
  textSize?: number | undefined,
  defaultText?: number | undefined,
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
  const [counter,setCounter] = useState(props.defaultText??0)

  const handleLeftBtn = ()=>{
    if(counter>0){
      setCounter(counter=>counter-1)
    }
  }
  const handleRightBtn = ()=>{
    setCounter(counter=>counter+1)
  }
  
  return (
    <View
      style={[styles.button_container,props.buttonContainerStyle]}>
      <TouchableOpacity onPress={()=>handleLeftBtn()} style={buttonStyle({borderWidth:props.borderWidth??1,buttonHeight:props.buttonheight??25,buttonWidth:props.buttonWidth??40,buttonColor:props.buttonColor??'#D9D9D9',buttonRadius:props.buttonRadius??10}).btnRight}>
        <Icon name={props.leftBtnIcon ?? 'minus'} size={props.iconSize ?? 20} color={props.iconColor??"black"} />
      </TouchableOpacity>
      <View style={buttonStyle({buttonHeight:props.buttonheight??25,buttonWidth:props.buttonWidth??40,buttonColor:props.buttonColor??'#D9D9D9',borderWidth:props.borderWidth??1}).textContainer}>
        <Text style={{ fontSize: props.textSize ?? 16,color:props.textColor??"black" }}>{counter}</Text>
      </View>
      <TouchableOpacity onPress={()=>handleRightBtn()} style={buttonStyle({borderWidth:props.borderWidth??1,buttonHeight:props.buttonheight??25,buttonWidth:props.buttonWidth??40,buttonColor:props.buttonColor??'#D9D9D9',buttonRadius:props.buttonRadius??10}).btnLeft}>
        <Icon name={props.leftBtnIcon ?? 'plus'} size={props.iconSize ?? 20} color={props.iconColor??"black"} />
      </TouchableOpacity>
    </View>
  )
}


export default CounterButton