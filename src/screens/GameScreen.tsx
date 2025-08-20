import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../constants/colors';
import { District } from '../constants/districts';
import { backgroundImages } from '../constants/backgrounds';
import { ScreenLayout, UpperContent } from '../components/ScreenLayout';
import { AvatarContainer, AvatarImage } from './GameScreen.styled';
import { StatsBar } from '../components/StatsBar';
import { ActionBar } from '../components/ActionBar';

const DistrictTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${colors.textInverse};
  text-align: center;
  margin-top: 16px;
  margin-bottom: 20px;
`;

const DistrictDescription = styled.Text`
  font-size: 16px;
  color: ${colors.textInverse};
  text-align: center;
  margin-bottom: 30px;
  line-height: 24px;
`;

const InfoText = styled.Text`
  font-size: 16px;
  color: ${colors.textInverse};
  text-align: center;
  line-height: 22px;
  margin-bottom: 16px;
`;

const ButtonsRow = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const PrimaryButton = styled.TouchableOpacity`
  background-color: ${colors.buttonPrimary};
  padding: 12px 20px;
  border-radius: 8px;
  margin: 0 8px;
`;

const SecondaryButton = styled.TouchableOpacity`
  background-color: ${colors.buttonSecondary};
  padding: 12px 20px;
  border-radius: 8px;
  margin: 0 8px;
`;

const ButtonText = styled.Text`
  color: ${colors.textInverse};
  font-size: 16px;
  font-weight: bold;
`;

 

interface GameScreenProps {
  selectedDistrict: District;
  onBackToStart: () => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({ selectedDistrict, onBackToStart }) => {
  const handleStart = () => {
    // TODO: Implement start action
  };
  return (
    <ScreenLayout backgroundImage={backgroundImages.gameBackground} defaultCollapsed={false}>
      <StatsBar overallPercent={72} />
      <UpperContent>
        <AvatarContainer style={{ paddingBottom: 40 }}>
          <AvatarImage source={require('../../assets/avatar.png')} />
        </AvatarContainer>
      </UpperContent>
      
      <ActionBar>
        <DistrictTitle>Willkommen in {selectedDistrict.germanName}!</DistrictTitle>
        <DistrictDescription>{selectedDistrict.description}</DistrictDescription>
        <InfoText>Als Koordinator*in des {selectedDistrict.germanName} ist deine Aufgabe dein Quartier zu hegen und zu pflegen.</InfoText>
        <ButtonsRow>
          <SecondaryButton onPress={onBackToStart}>
            <ButtonText>Zurück</ButtonText>
          </SecondaryButton>
          <PrimaryButton onPress={handleStart}>
            <ButtonText>Start</ButtonText>
          </PrimaryButton>
        </ButtonsRow>
      </ActionBar>
    </ScreenLayout>
  );
};
