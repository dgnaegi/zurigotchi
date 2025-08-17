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

// Toggle button moved to separate component styles: ToggleCollapseButton.styled.tsx
