import styled from 'styled-components/native';
import { colors } from '../constants/colors';

export const ToggleWrapper = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  z-index: 10;
`;

export const ToggleButtonTouchable = styled.TouchableOpacity<{ collapsed: boolean }>`
  width: ${props => (props.collapsed ? '80px' : '60px')};
  height: ${props => (props.collapsed ? '50px' : '40px')};
  background-color: ${colors.buttonPrimary};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const ToggleIcon = styled.Text<{ collapsed: boolean }>`
  color: ${colors.textInverse};
  font-size: ${props => (props.collapsed ? '48px' : '24px')};
  font-weight: bold;
`;


