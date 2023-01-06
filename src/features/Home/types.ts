import {ProductType} from '@utils/containerTypes';
type CardProps = {
  data: ProductType;
};

type CatagoryCardProps = {
  id: string;
  name: string;
  icon: string;
};

export type {CardProps, CatagoryCardProps};
