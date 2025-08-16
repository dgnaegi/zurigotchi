import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { colors } from './src/constants/colors';

const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 24px;
  color: ${colors.textInverse};
  font-weight: bold;
`;

export default function App() {
  return (
    <Container>
      <StyledText>Hello world!</StyledText>
      <StatusBar style="auto" />
    </Container>
  );
}
