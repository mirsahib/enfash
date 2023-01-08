import {ParamListBase} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';

const setStackNavigationOptions = <T extends ParamListBase>(
  navigation: NativeStackNavigationProp<T>,
  options: NativeStackNavigationOptions,
) => {
  useEffect(() => {
    navigation.setOptions(options);
  }, [navigation]);
};

const setBottomNavigationOptions = <T extends ParamListBase>(
  navigation: BottomTabNavigationProp<T>,
  options: BottomTabNavigationOptions,
) => {
  useEffect(() => {
    navigation.setOptions(options);
  }, [navigation]);
};

export {
    setStackNavigationOptions,
    setBottomNavigationOptions
};
