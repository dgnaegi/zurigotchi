import React, { useState } from 'react';
import { Animated, ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../constants/colors';
import { ToggleCollapseButton } from './ToggleCollapseButton';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Container = styled.View`
  flex: 1;
  background-color: transparent;
  position: relative;
`;

const BackgroundImage = styled(ImageBackground)`
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

// Lower content has been extracted to `ActionBar` component.

interface ScreenLayoutProps {
  backgroundImage?: any;
  children: React.ReactNode;
  defaultCollapsed?: boolean;
  showBottomToggle?: boolean;
}

interface ScreenLayoutContextType {
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

const ScreenLayoutContext = React.createContext<ScreenLayoutContextType | null>(null);
export const useScreenLayout = (): ScreenLayoutContextType => {
  const context = React.useContext(ScreenLayoutContext);
  if (!context) {
    throw new Error('useScreenLayout must be used within ScreenLayout');
  }
  return context;
};

export const ScreenLayout: React.FC<ScreenLayoutProps> = ({ 
  backgroundImage, 
  children,
  defaultCollapsed = false,
  showBottomToggle = true,
}) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(defaultCollapsed);
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
      <SafeAreaProvider>
        <Container>
          {backgroundImage ? (
            <BackgroundImage source={backgroundImage} resizeMode="cover">
              <Content pointerEvents="box-none">
                {children}
              </Content>
            </BackgroundImage>
          ) : (
            <Content pointerEvents="box-none">
              {children}
            </Content>
          )}
          {showBottomToggle && (
            <ToggleCollapseButton collapsed={isCollapsed} onPress={toggleCollapse} />
          )}
        </Container>
      </SafeAreaProvider>
    </ScreenLayoutContext.Provider>
  );
};

export const UpperContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <UpperHalf>{children}</UpperHalf>;
};

// LowerContent removed; use `ActionBar` component instead.
