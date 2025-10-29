// utils/colors.ts

export const getTypeColor = (type: string): string => {
    const colors: Record<string, string> = {
      fire: '#FF6B9D',
      water: '#A8C5FF',
      grass: '#B8E994',
      electric: '#FFD93D',
      psychic: '#FF85C0',
      ice: '#C0E8FF',
      dragon: '#B084FF',
      dark: '#8B7B9B',
      fairy: '#FFB3E6',
      normal: '#D4B5FF',
      fighting: '#FF8FA3',
      flying: '#DEB5FF',
      poison: '#D084FF',
      ground: '#E8C4A3',
      rock: '#C4A4B3',
      bug: '#D4E157',
      ghost: '#B084CC',
      steel: '#C4B5D5',
    };
    return colors[type] || '#D4B5FF';
  };
  
  export const colors = {
    background: '#0a0a0a',
    cardBackground: '#1a0a1f',
    primary: '#FF6B9D',
    secondary: '#FFB3E6',
    tertiary: '#B084CC',
    border: '#4a2a5a',
    inputBackground: '#2a1a3a',
  };