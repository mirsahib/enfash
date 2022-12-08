import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/AntDesign'
import styles from '../styles/main'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AuthNavigationParams } from '..'
import { RadioButton, TextInput } from 'react-native-paper'

const Login = () => {
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
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 32 }}>Welcome Back</Text>
          </View>{/* header end */}
          <View style={{ flex: 2, justifyContent: 'space-evenly', marginBottom: '5%' }}>
            <View >
              <TextInput style={{ backgroundColor: 'white' }} label="Email" />
            </View>
            <View>
              <TextInput style={{ backgroundColor: 'white' }} secureTextEntry right={<TextInput.Icon icon="eye" />}
                label="Password" />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
              />
              <Text style={{ color: 'black', marginRight: "20%" }}>Remember me</Text>
              <Text style={{ color: 'black', textDecorationLine: 'underline' }}>Forget Password</Text>
            </View>
          </View>{/* form end */}
          <View style={{ flex: 1, justifyContent: 'space-around' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ fontSize: 24, fontWeight: '600', color: 'black' }}>Sign In</Text>
              <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: 'black', borderRadius: 50 / 2, justifyContent: 'center', alignItems: 'center' }}>
                <Icons name="arrowright" color={"white"} size={25} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={{ fontSize: 16, fontWeight: '500', color: 'black', textDecorationLine: 'underline' }}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>)
}

export default Login

