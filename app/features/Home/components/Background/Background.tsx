import React from 'react';
import { TopContainer, BottomContainer } from './Background.styles';
import { BackgroundProps } from './types';

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <>
      <TopContainer />
      <BottomContainer />
      {children}
    </>
  );
};

export default Background;
