import styled from 'styled-components/native';
import { colors } from '../constants/colors';
import { EdgeInsets } from 'react-native-safe-area-context';

export const ToggleWrapper = styled.View<{ insets: EdgeInsets }>`
  position: absolute;
  bottom: ${props => `${props.insets.bottom + 12}px`};
  left: 0;
  right: 0;
  align-items: center;
  z-index: 10;
`;

export const ToggleButtonTouchable = styled.TouchableOpacity<{ collapsed: boolean }>`
  min-width: ${props => (props.collapsed ? '120px' : '100px')};
  height: ${props => (props.collapsed ? '56px' : '44px')};
  padding: 0 16px;
  background-color: ${colors.surface};
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  elevation: 6;
  shadow-color: #000000;
  shadow-opacity: 0.25;
  shadow-radius: 8px;
  shadow-offset: 0px 2px;
`;

export const ToggleIcon = styled.Text<{ collapsed: boolean }>`
  color: ${colors.textPrimary};
  font-size: ${props => (props.collapsed ? '48px' : '24px')};
  font-weight: bold;
`;


