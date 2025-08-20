import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  StatsBarContainer,
  Card,
  Row,
  IconButton,
  IconLabel,
  ProgressArea,
  ProgressTrack,
  ProgressFill,
  ExpandedPanel,
  ExpandedText,
} from './StatsBar.styled';

interface StatsBarProps {
  overallPercent: number; // 0..100
  onPressSettings?: () => void;
}

export const StatsBar: React.FC<StatsBarProps> = ({ overallPercent, onPressSettings }) => {
  const insets = useSafeAreaInsets();
  const [expanded, setExpanded] = useState(false);

  return (
    <StatsBarContainer insets={insets} pointerEvents="box-none">
      <Card pointerEvents="auto">
        <Row>
          <IconButton onPress={() => setExpanded((v) => !v)} accessibilityLabel="Expand stats">
            <IconLabel>{expanded ? '▲' : '▼'}</IconLabel>
          </IconButton>
          <ProgressArea>
            <ProgressTrack>
              <ProgressFill percent={overallPercent} />
            </ProgressTrack>
          </ProgressArea>
          <IconButton onPress={onPressSettings} accessibilityLabel="Open settings">
            <IconLabel>⚙️</IconLabel>
          </IconButton>
        </Row>

        {expanded && (
          <ExpandedPanel>
            <ExpandedText>Expanded content placeholder (tabs/stats coming next).</ExpandedText>
          </ExpandedPanel>
        )}
      </Card>
    </StatsBarContainer>
  );
};


