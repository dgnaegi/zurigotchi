import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { colors } from './src/constants/colors';
import { StartScreen } from './src/screens/StartScreen';
import { GameScreen } from './src/screens/GameScreen';
import { District } from './src/constants/districts';

const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

type Screen = 'start' | 'game';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('start');
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);

  const handleDistrictSelect = (district: District) => {
    setSelectedDistrict(district);
    setCurrentScreen('game');
  };

  const handleBackToStart = () => {
    setCurrentScreen('start');
    setSelectedDistrict(null);
  };

  return (
    <Container>
      <StatusBar style="light" />
      
      {currentScreen === 'start' && (
        <StartScreen onDistrictSelect={handleDistrictSelect} />
      )}
      
      {currentScreen === 'game' && selectedDistrict && (
        <GameScreen 
          selectedDistrict={selectedDistrict} 
          onBackToStart={handleBackToStart} 
        />
      )}
    </Container>
  );
}
