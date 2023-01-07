import { Icondirectory } from '@src/types';
import {ProductType} from '@utils/containerTypes';
import {StyleProp, ViewStyle} from 'react-native';
type CardProps = {
  data: ProductType;
};

type CatagoryCardProps = {
  id: string;
  name: string;
  icon: string;
};

type IconButtonPropsType = {
  containerStyle: StyleProp<ViewStyle>;
  iconDirectory: Icondirectory;
  icon: string;
  iconSize: number;
  iconColor: string;
  [key: string]: any; // rest of the pressable properties
};

export type {CardProps, CatagoryCardProps, IconButtonPropsType};
