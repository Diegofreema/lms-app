import { IconType } from 'react-icons';
import { staffTableData } from './constants';

export type Options = {
  title: string;
  description: string;
  icon: IconType;
};

export type Staff = (typeof staffTableData)[0];
