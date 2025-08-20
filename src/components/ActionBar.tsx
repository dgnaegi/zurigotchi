import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';
import { ActionBarShell } from './ActionBar.styled';
import { useScreenLayout } from './ScreenLayout';

interface ActionBarProps {
  children: React.ReactNode;
  expandedHeight?: number; // default 360
}

export const ActionBar: React.FC<ActionBarProps> = ({ children, expandedHeight = 360 }) => {
  const { isCollapsed } = useScreenLayout();
  const [animation] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isCollapsed ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isCollapsed]);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, expandedHeight],
        }),
        overflow: 'hidden',
      }}
    >
      <ActionBarShell>{children}</ActionBarShell>
    </Animated.View>
  );
};


