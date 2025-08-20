import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../constants/colors';
import { districts, District } from '../constants/districts';
import { backgroundImages } from '../constants/backgrounds';
import { ScreenLayout, UpperContent } from '../components/ScreenLayout';
import { ActionBar } from '../components/ActionBar';

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${colors.textInverse};
  text-align: center;
  margin-bottom: 20px;
`;

const Subtitle = styled.Text`
  font-size: 18px;
  color: ${colors.textInverse};
  text-align: center;
  margin-bottom: 30px;
`;

const DropdownContainer = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

const DropdownButton = styled.TouchableOpacity`
  background-color: ${colors.surface};
  padding: 15px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DropdownButtonText = styled.Text`
  font-size: 16px;
  color: ${colors.textPrimary};
  font-weight: bold;
`;

const DropdownIcon = styled.Text`
  font-size: 18px;
  color: ${colors.textPrimary};
`;

const DropdownList = styled.View`
  background-color: ${colors.surface};
  border-radius: 8px;
  margin-top: 5px;
  max-height: 200px;
`;

const DropdownItem = styled.TouchableOpacity<{ available: boolean }>`
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.textSecondary};
  opacity: ${(props: { available: boolean }) => props.available ? 1 : 0.6};
`;

const DropdownItemText = styled.Text<{ available: boolean }>`
  font-size: 16px;
  color: ${(props: { available: boolean }) => props.available ? colors.textPrimary : colors.textInverse};
  text-align: center;
`;

const StartButton = styled.TouchableOpacity`
  background-color: ${colors.buttonPrimary};
  padding: 15px 30px;
  border-radius: 8px;
  margin-top: 20px;
`;

const StartButtonText = styled.Text`
  color: ${colors.textInverse};
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

interface StartScreenProps {
  onDistrictSelect: (district: District) => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onDistrictSelect }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);

  const handleDistrictSelect = (district: District) => {
    if (district.available) {
      setSelectedDistrict(district);
      setIsDropdownOpen(false);
    }
  };

  const handleStartGame = () => {
    if (selectedDistrict) {
      onDistrictSelect(selectedDistrict);
    }
  };

  const availableDistricts = districts.filter(district => district.available);

  return (
    <ScreenLayout backgroundImage={backgroundImages.startScreen} showBottomToggle={false} defaultCollapsed={false}>
      <UpperContent>
        <View />
      </UpperContent>
      
      <ActionBar extraBottomPadding={24}>
        <Title>Zurigotchi</Title>
        <Subtitle>Wähle einen Kreis</Subtitle>
        
        <DropdownContainer>
          <DropdownButton onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
            <DropdownButtonText>
              {selectedDistrict ? selectedDistrict.germanName : 'Kreis auswählen'}
            </DropdownButtonText>
            <DropdownIcon>{isDropdownOpen ? '▲' : '▼'}</DropdownIcon>
          </DropdownButton>
          
          {isDropdownOpen && (
            <DropdownList>
              <ScrollView>
                {districts.map((district) => (
                  <DropdownItem
                    key={district.id}
                    available={district.available}
                    onPress={() => handleDistrictSelect(district)}
                  >
                    <DropdownItemText available={district.available}>
                      {district.germanName}
                    </DropdownItemText>
                  </DropdownItem>
                ))}
              </ScrollView>
            </DropdownList>
          )}
        </DropdownContainer>
        
        {selectedDistrict && (
          <StartButton onPress={handleStartGame}>
            <StartButtonText>Spiel starten</StartButtonText>
          </StartButton>
        )}
      </ActionBar>
    </ScreenLayout>
  );
};
