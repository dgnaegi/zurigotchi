import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../constants/colors';
import { District } from '../constants/districts';
import { backgroundImages } from '../constants/backgrounds';
import { ScreenLayout, UpperContent, LowerContent } from '../components/ScreenLayout';
import { View } from 'react-native';
import { AvatarContainer, AvatarImage } from './GameScreen.styled';
import { TopStatsPanel } from '../components/TopStatsPanel';

const DistrictTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${colors.textInverse};
  text-align: center;
  margin-bottom: 20px;
`;

const DistrictDescription = styled.Text`
  font-size: 16px;
  color: ${colors.textInverse};
  text-align: center;
  margin-bottom: 30px;
  line-height: 24px;
`;

const BackButton = styled.TouchableOpacity`
  background-color: ${colors.buttonPrimary};
  padding: 15px 30px;
  border-radius: 8px;
  margin-top: 20px;
`;

const BackButtonText = styled.Text`
  color: ${colors.textInverse};
  font-size: 16px;
  font-weight: bold;
`;

interface GameScreenProps {
  selectedDistrict: District;
  onBackToStart: () => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({ selectedDistrict, onBackToStart }) => {
  return (
    <ScreenLayout backgroundImage={backgroundImages.gameBackground}>
      <TopStatsPanel overallScore={72} />
      <UpperContent>
        <AvatarContainer>
          <AvatarImage source={require('../../assets/avatar.png')} />
        </AvatarContainer>
      </UpperContent>
      
      <LowerContent>
        <DistrictTitle>Willkommen in {selectedDistrict.germanName}!</DistrictTitle>
        <DistrictDescription>{selectedDistrict.description}</DistrictDescription>
        
        <BackButton onPress={onBackToStart}>
          <BackButtonText>Zurück zur Auswahl</BackButtonText>
        </BackButton>
      </LowerContent>
    </ScreenLayout>
  );
};
