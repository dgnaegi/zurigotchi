import styled from 'styled-components/native';
import { colors } from '../constants/colors';
import { EdgeInsets } from 'react-native-safe-area-context';

export const StatsBarContainer = styled.View<{ insets: EdgeInsets }>`
  position: absolute;
  left: 0;
  right: 0;
  top: ${props => `${props.insets.top + 8}px`};
  padding: 0 16px;
  z-index: 40;
`;

export const Card = styled.View`
  background-color: ${colors.deepMagenta};
  border-radius: 16px;
  padding: 12px;
  elevation: 4;
  shadow-color: #000000;
  shadow-opacity: 0.2;
  shadow-radius: 6px;
  shadow-offset: 0px 2px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconButton = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.18);
`;

export const IconLabel = styled.Text`
  color: ${colors.textInverse};
  font-size: 22px;
`;

export const ProgressArea = styled.View`
  flex: 1;
  padding: 0 12px;
`;

export const ProgressTrack = styled.View`
  width: 100%;
  height: 16px;
  background-color: rgba(255, 255, 255, 0.28);
  border-radius: 10px;
  overflow: hidden;
`;

export const ProgressFill = styled.View<{ percent: number }>`
  width: ${props => `${Math.max(0, Math.min(100, props.percent))}%`};
  height: 100%;
  background-color: ${colors.cyberYellow};
`;

export const ExpandedPanel = styled.View`
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0.18);
  border-radius: 12px;
  padding: 12px;
`;

export const ExpandedText = styled.Text`
  color: ${colors.textInverse};
`;


