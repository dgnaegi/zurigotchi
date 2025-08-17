import React from 'react';
import { ToggleButtonTouchable, ToggleIcon, ToggleWrapper } from './ToggleCollapseButton.styled';

interface ToggleCollapseButtonProps {
  collapsed: boolean;
  onPress: () => void;
}

export const ToggleCollapseButton: React.FC<ToggleCollapseButtonProps> = ({ collapsed, onPress }) => {
  return (
    <ToggleWrapper>
      <ToggleButtonTouchable collapsed={collapsed} onPress={onPress}>
        <ToggleIcon collapsed={collapsed}>{collapsed ? '▼' : '▲'}</ToggleIcon>
      </ToggleButtonTouchable>
    </ToggleWrapper>
  );
};


