import styled from 'styled-components/native';
import { colors } from '../constants/colors';

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${colors.textInverse};
  text-align: center;
  margin-bottom: 20px;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  color: ${colors.textInverse};
  text-align: center;
  margin-bottom: 30px;
`;

export const DropdownContainer = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const DropdownButton = styled.TouchableOpacity`
  background-color: ${colors.surface};
  padding: 15px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DropdownButtonText = styled.Text`
  font-size: 16px;
  color: ${colors.textPrimary};
  font-weight: bold;
`;

export const DropdownIcon = styled.Text`
  font-size: 18px;
  color: ${colors.textPrimary};
`;

export const DropdownList = styled.View`
  background-color: ${colors.surface};
  border-radius: 8px;
  margin-top: 5px;
  max-height: 200px;
`;

export const DropdownItem = styled.TouchableOpacity<{ available: boolean }>`
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.textSecondary};
  opacity: ${(props: { available: boolean }) => props.available ? 1 : 0.6};
`;

export const DropdownItemText = styled.Text<{ available: boolean }>`
  font-size: 16px;
  color: ${(props: { available: boolean }) => props.available ? colors.textPrimary : colors.textInverse};
  text-align: center;
`;

export const StartButton = styled.TouchableOpacity`
  background-color: ${colors.buttonPrimary};
  padding: 15px 30px;
  border-radius: 8px;
  margin-top: 20px;
`;

export const StartButtonText = styled.Text`
  color: ${colors.textInverse};
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
