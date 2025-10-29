// components/SearchBar.tsx
import React from 'react';
import { TextInput } from 'react-native';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  value, 
  onChangeText, 
  placeholder = "Buscar Pokémon... 🔍" 
}) => {
  return (
    <TextInput
      className="bg-pokemon-input text-pokemon-light-pink p-4 rounded-3xl text-base border-2 border-pokemon-border"
      placeholder={placeholder}
      placeholderTextColor="#B084CC"
      value={value}
      onChangeText={onChangeText}
    />
  );
};