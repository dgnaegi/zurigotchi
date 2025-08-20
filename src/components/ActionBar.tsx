import React, { useEffect, useState } from 'react';
import { Animated, View } from 'react-native';
import { ActionBarShell } from './ActionBar.styled';
import { useScreenLayout } from './ScreenLayout';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ActionBarProps {
  children: React.ReactNode;
  expandedHeight?: number; // default 360
  extraBottomPadding?: number; // default 96
}

export const ActionBar: React.FC<ActionBarProps> = ({ children, expandedHeight = 360, extraBottomPadding = 96 }) => {
  const { isCollapsed } = useScreenLayout();
  const [animation] = useState(new Animated.Value(1));
  const insets = useSafeAreaInsets();

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
      <ActionBarShell>
        <View style={{ paddingBottom: insets.bottom + extraBottomPadding }}>
          {children}
        </View>
      </ActionBarShell>
    </Animated.View>
  );
};


