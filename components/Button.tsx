// components/Button.tsx
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  className?: string;
  textClassName?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  title, 
  onPress, 
  className = '', 
  textClassName = '' 
}) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      className={`bg-pokemon-pink py-3 px-6 rounded-full items-center justify-center ${className}`}
    >
      <Text className={`text-pokemon-dark text-base font-bold ${textClassName}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};