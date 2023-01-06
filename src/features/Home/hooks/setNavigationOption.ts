import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationOptions, NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useEffect} from 'react';

const setNavigationOptions = <T extends ParamListBase>(
  navigation: NativeStackNavigationProp<T>,
  options: NativeStackNavigationOptions
) => {
  useEffect(() => {
    navigation.setOptions(options)
  },[navigation]);
};

export default setNavigationOptions;
