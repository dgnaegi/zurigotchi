export const colors = {
  middleYellow: '#FDE803',
  cyberYellow: '#FFD300',
  
  deepMagenta: '#CC00CD',
  shockingPink: '#E90DCF',
  hotMagenta: '#FE1ECC',
  
  primary: '#FDE803',
  secondary: '#CC00CD',
  accent: '#E90DCF',
  warning: '#FFD300',
  success: '#FE1ECC',
  
  background: '#CC00CD',
  surface: '#FFD300',
  
  textPrimary: '#CC00CD',
  textSecondary: '#E90DCF',
  textInverse: '#FFFFFF',
  
  buttonPrimary: '#CC00CD',
  buttonSecondary: '#E90DCF',
  buttonHover: '#FE1ECC',
  
  error: '#E90DCF',
  info: '#FFD300',
} as const;

export type ColorKey = keyof typeof colors;

export const getColor = (colorKey: ColorKey, fallback?: string): string => {
  return colors[colorKey] || fallback || colors.primary;
};
