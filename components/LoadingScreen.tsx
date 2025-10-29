// components/LoadingScreen.tsx
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

interface LoadingScreenProps {
  message?: string;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  message = "Cargando Pokémon... ✨" 
}) => {
  return (
    <View className="flex-1 justify-center items-center bg-pokemon-dark">
      <ActivityIndicator size="large" color="#FF6B9D" />
      <Text className="text-pokemon-light-pink mt-5 text-lg font-semibold">
        {message}
      </Text>
    </View>
  );
};