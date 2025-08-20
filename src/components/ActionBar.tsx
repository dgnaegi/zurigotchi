import React, { useEffect, useRef, useState } from 'react';
import { Animated, View, LayoutChangeEvent, Dimensions } from 'react-native';
import { ActionBarShell } from './ActionBar.styled';
import { useScreenLayout } from './ScreenLayout';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ActionBarProps {
  children: React.ReactNode;
  extraBottomPadding?: number; // default 96
}

export const ActionBar: React.FC<ActionBarProps> = ({ children, extraBottomPadding = 96 }) => {
  const { isCollapsed } = useScreenLayout();
  const [contentHeight, setContentHeight] = useState<number>(0);
  const heightAnimRef = useRef(new Animated.Value(0));
  const heightAnim = heightAnimRef.current;
  const insets = useSafeAreaInsets();
  const screenHeight = Dimensions.get('window').height;
  const minExpandedHeight = Math.max(0, Math.floor(screenHeight * 0.4));

  useEffect(() => {
    if (isCollapsed) {
      Animated.timing(heightAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else {
      // Expand immediately to fit content
      heightAnim.setValue(Math.max(contentHeight, minExpandedHeight));
    }
  }, [isCollapsed, contentHeight, minExpandedHeight, heightAnim]);

  const handleLayout = (e: LayoutChangeEvent) => {
    const measuredHeight = e.nativeEvent.layout.height;
    setContentHeight(measuredHeight);
    if (!isCollapsed) {
      heightAnim.setValue(Math.max(measuredHeight, minExpandedHeight));
    }
  };

  return (
    <Animated.View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: heightAnim,
        overflow: 'hidden',
      }}
    >
      <ActionBarShell>
        <View style={{ paddingBottom: insets.bottom + extraBottomPadding }} onLayout={handleLayout}>
          {children}
        </View>
      </ActionBarShell>
    </Animated.View>
  );
};


