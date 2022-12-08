import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles/main'
import Icons from 'react-native-vector-icons/AntDesign'
import { useNavigation, } from '@react-navigation/native'
import { TextInput, useTheme } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AuthNavigationParams } from '../index'
import { RadioButton } from 'react-native-paper';

const SignIn = () => {
  const theme = useTheme()
  const navigation = useNavigation<NativeStackNavigationProp<AuthNavigationParams>>()
  const [checked, setChecked] = React.useState('first');

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, marginBottom: '5%' }}>
        <Image style={{}} source={require('../../../assets/Pattern.png')} />
      </View>
      <View style={{ backgroundColor: 'white', flex: 2, borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
        <View style={{ flex: 1, marginHorizontal: '5%', paddingBottom: '10%' }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 32 }}>Get Started</Text>
          </View>{/* header end */}
          <View style={{ flex: 2, justifyContent: 'space-evenly', marginBottom: '5%' }}>
            <View >
              <TextInput style={{ backgroundColor: 'white' }} label="Name" />
            </View>
            <View>
              <TextInput style={{ backgroundColor: 'white' }} label="Email" />
            </View>
            <View>
              <TextInput style={{ backgroundColor: 'white' }} secureTextEntry right={<TextInput.Icon icon="eye" />}
                label="Password" />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%' }}>
              <RadioButton value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
              />
              <Text style={{ color: 'black' }}>I agree to terms and service</Text>
            </View>
          </View>{/* form end */}
          <View style={{ flex: 1, justifyContent: 'space-around' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ fontSize: 24, fontWeight: '600', color: 'black' }}>Sign Up</Text>
              <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: 'black', borderRadius: 50 / 2, justifyContent: 'center', alignItems: 'center' }}>
                <Icons name="arrowright" color={"white"} size={25} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={{ fontSize: 16, fontWeight: '500', color: 'black', textDecorationLine: 'underline' }}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default SignIn
