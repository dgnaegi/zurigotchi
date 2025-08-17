import React, { useState } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../constants/colors';
import { ToggleCollapseButton } from './ToggleCollapseButton';

const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

const BackgroundImage = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const Content = styled.View`
  flex: 1;
  position: relative;
`;

const UpperHalf = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const LowerHalf = styled.View`
  background-color: ${colors.deepMagenta};
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const ToggleButton = styled.TouchableOpacity`
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

const ToggleIcon = styled.Text`
  color: ${colors.textInverse};
  font-size: 24px;
  font-weight: bold;
`;

interface ScreenLayoutProps {
  backgroundImage?: any;
  children: React.ReactNode;
  defaultCollapsed?: boolean;
}

interface ScreenLayoutContextType {
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

const ScreenLayoutContext = React.createContext<ScreenLayoutContextType | null>(null);

export const ScreenLayout: React.FC<ScreenLayoutProps> = ({ 
  backgroundImage, 
  children,
  defaultCollapsed = false
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [animation] = useState(new Animated.Value(1));

  const toggleCollapse = () => {
    const toValue = isCollapsed ? 1 : 0;
    setIsCollapsed(!isCollapsed);
    
    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const contextValue: ScreenLayoutContextType = {
    isCollapsed,
    toggleCollapse,
  };

  return (
    <ScreenLayoutContext.Provider value={contextValue}>
      <Container>
        {backgroundImage ? (
          <BackgroundImage source={backgroundImage} resizeMode="cover">
            <Content>
              {children}
              <ToggleCollapseButton collapsed={isCollapsed} onPress={toggleCollapse} />
            </Content>
          </BackgroundImage>
        ) : (
          <Content>
            {children}
            <ToggleCollapseButton collapsed={isCollapsed} onPress={toggleCollapse} />
          </Content>
        )}
      </Container>
    </ScreenLayoutContext.Provider>
  );
};

export const UpperContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <UpperHalf>{children}</UpperHalf>;
};

export const LowerContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const context = React.useContext(ScreenLayoutContext);
  
  if (!context) {
    return <LowerHalf>{children}</LowerHalf>;
  }

  const { isCollapsed } = context;
  const [animation] = useState(new Animated.Value(1));

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: isCollapsed ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isCollapsed]);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 300],
        }),
        overflow: 'hidden',
      }}
    >
      <LowerHalf>{children}</LowerHalf>
    </Animated.View>
  );
};
