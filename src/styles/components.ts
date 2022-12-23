import { StyleSheet } from 'react-native'
interface ButtonProps {
    borderWidth?:number
    backgroundColor?: string,
    buttonWidth?:number,
    buttonHeight?:number
    buttonColor?:string,
    buttonRadius?:number
}
export const buttonStyle = (props:ButtonProps)=>StyleSheet.create({
    btnRight: {
        width: props.buttonWidth,
        height: props.buttonHeight,
        alignItems: 'center',
        justifyContent:'center',
        borderTopWidth: props.borderWidth,
        borderLeftWidth: props.borderWidth,
        borderBottomWidth: props.borderWidth,
        borderTopLeftRadius: props.buttonRadius,
        borderBottomLeftRadius: props.buttonRadius,
        backgroundColor: props.buttonColor,
      },
      btnLeft: {
        width: props.buttonWidth,
        height: props.buttonHeight,
        alignItems: 'center',
        justifyContent:'center',
        borderTopWidth: props.borderWidth,
        borderRightWidth: props.borderWidth,
        borderBottomWidth: props.borderWidth,
        borderTopRightRadius: props.buttonRadius,
        borderBottomRightRadius: props.buttonRadius,
        backgroundColor: props.buttonColor,
      },
      textContainer: {
        width: props.buttonWidth,
        height: props.buttonHeight,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: props.buttonColor,
        borderTopWidth:props.borderWidth,
        borderBottomWidth:props.borderWidth,
      },
})

const styles = StyleSheet.create({
    button_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
  });
  
export default styles;
