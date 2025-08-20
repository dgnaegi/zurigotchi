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
  padding: 10px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DropdownButtonText = styled.Text`
  font-size: 15px;
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
  max-height: 120px;
`;

const DropdownItem = styled.TouchableOpacity<{ available: boolean; isLast: boolean }>`
  padding: 10px;
  border-bottom-width: ${(props: { isLast: boolean }) => (props.isLast ? 0 : 1)}px;
  border-bottom-color: ${colors.textSecondary};
  opacity: ${(props: { available: boolean }) => props.available ? 1 : 0.6};
`;

const DropdownItemText = styled.Text<{ available: boolean }>`
  font-size: 15px;
  color: ${(props: { available: boolean }) => props.available ? colors.textPrimary : colors.textInverse};
  text-align: center;
`;

 

interface StartScreenProps {
  onDistrictSelect: (district: District) => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onDistrictSelect }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDistrictSelect = (district: District) => {
    if (district.available) {
      onDistrictSelect(district);
    }
  };

  

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
              Kreis auswählen
            </DropdownButtonText>
            <DropdownIcon>{isDropdownOpen ? '▲' : '▼'}</DropdownIcon>
          </DropdownButton>
          
          {isDropdownOpen && (
            <DropdownList>
              <ScrollView contentContainerStyle={{ paddingBottom: 0 }}>
                {districts.map((district, idx) => (
                  <DropdownItem
                    key={district.id}
                    available={district.available}
                    isLast={idx === districts.length - 1}
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
        
        
      </ActionBar>
    </ScreenLayout>
  );
};
