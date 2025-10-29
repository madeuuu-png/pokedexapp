// components/SearchBar.tsx
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

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
      style={styles.searchInput}
      placeholder={placeholder}
      placeholderTextColor={colors.tertiary}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: colors.inputBackground,
    color: colors.secondary,
    padding: 15,
    borderRadius: 25,
    fontSize: 16,
    borderWidth: 2,
    borderColor: colors.border,
  },
});