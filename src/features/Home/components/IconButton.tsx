import {Pressable} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';
import IconComponent from '@components/IconComponent';
import {IconButtonPropsType} from '../types';

const IconButton = (props: IconButtonPropsType) => {
  const theme = useTheme();

  const {
    containerStyle,
    iconDirectory,
    icon,
    iconSize,
    iconColor,
  } = props;

  return (
    <Pressable
      {...props}
      style={containerStyle}>
      <IconComponent
        iconDirectory={iconDirectory}
        name={icon}
        size={iconSize}
        color={iconColor}
      />
    </Pressable>
  );
};

export default IconButton;

