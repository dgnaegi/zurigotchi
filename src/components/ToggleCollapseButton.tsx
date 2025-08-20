import React from 'react';
import { ToggleButtonTouchable, ToggleIcon, ToggleWrapper } from './ToggleCollapseButton.styled';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ToggleCollapseButtonProps {
  collapsed: boolean;
  onPress: () => void;
}

export const ToggleCollapseButton: React.FC<ToggleCollapseButtonProps> = ({ collapsed, onPress }) => {
  const insets = useSafeAreaInsets();
  return (
    <ToggleWrapper insets={insets} pointerEvents="box-none">
      <ToggleButtonTouchable collapsed={collapsed} onPress={onPress} activeOpacity={0.8}>
        <ToggleIcon collapsed={collapsed}>{collapsed ? '▲' : '▼'}</ToggleIcon>
      </ToggleButtonTouchable>
    </ToggleWrapper>
  );
};


