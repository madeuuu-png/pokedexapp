// components/TypeChip.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getTypeColor } from '../utils/colors';

interface TypeChipProps {
  typeName: string;
  size?: 'small' | 'large';
}

export const TypeChip: React.FC<TypeChipProps> = ({ typeName, size = 'small' }) => {
  const isLarge = size === 'large';
  
  return (
    <View 
      style={[
        isLarge ? styles.typeChipLarge : styles.typeChipSmall,
        { backgroundColor: getTypeColor(typeName) }
      ]}
    >
      <Text style={isLarge ? styles.typeTextLarge : styles.typeTextSmall}>
        {typeName}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  typeChipSmall: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  typeChipLarge: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  typeTextSmall: {
    color: '#0a0a0a',
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  typeTextLarge: {
    color: '#0a0a0a',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});