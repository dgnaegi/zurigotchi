import styled from 'styled-components/native';
import { colors } from '../constants/colors';

export const AvatarContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const AvatarImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 90%;
  height: 90%;
`;

export const DistrictTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${colors.textInverse};
  text-align: center;
  margin-bottom: 20px;
`;

export const DistrictDescription = styled.Text`
  font-size: 16px;
  color: ${colors.textInverse};
  text-align: center;
  margin-bottom: 30px;
  line-height: 24px;
`;

export const BackButton = styled.TouchableOpacity`
  background-color: ${colors.buttonPrimary};
  padding: 15px 30px;
  border-radius: 8px;
  margin-top: 20px;
`;

export const BackButtonText = styled.Text`
  color: ${colors.textInverse};
  font-size: 16px;
  font-weight: bold;
`;
