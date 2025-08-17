import styled from 'styled-components/native';
import { colors } from '../constants/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Content = styled.View`
  flex: 1;
  position: relative;
`;

export const UpperHalf = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const LowerHalf = styled.View`
  background-color: ${colors.deepMagenta};
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ToggleButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-30px);
  width: 60px;
  height: 40px;
  background-color: ${colors.buttonPrimary};
  border-radius: 20px 20px 0 0;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ToggleIcon = styled.Text`
  color: ${colors.textInverse};
  font-size: 24px;
  font-weight: bold;
`;
