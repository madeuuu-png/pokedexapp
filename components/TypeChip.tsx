// components/TypeChip.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { getTypeColor } from '../utils/colors';

interface TypeChipProps {
  typeName: string;
  size?: 'small' | 'large';
}

export const TypeChip: React.FC<TypeChipProps> = ({ typeName, size = 'small' }) => {
  const isLarge = size === 'large';
  const backgroundColor = getTypeColor(typeName);
  
  return (
    <View 
      className={`${isLarge ? 'py-2 px-5 rounded-2xl' : 'py-1 px-2.5 rounded-xl'}`}
      style={{ backgroundColor }}
    >
      <Text className={`text-pokemon-dark font-bold capitalize ${isLarge ? 'text-sm' : 'text-xs'}`}>
        {typeName}
      </Text>
    </View>
  );
};