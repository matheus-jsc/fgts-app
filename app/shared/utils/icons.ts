import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
  style?: any;
}

export const Icons = {
  smile: (props: IconProps) => React.createElement(FontAwesome5, { name: 'smile', ...props }),
  calendar: (props: IconProps) => React.createElement(FontAwesome5, { name: 'calendar-alt', ...props }),
  chevronDown: (props: IconProps) => React.createElement(FontAwesome5, { name: 'chevron-down', ...props })
};

export type IconName = keyof typeof Icons;
