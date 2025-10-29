// components/PokemonCard.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Pokemon } from '../types/pokemon';
import { TypeChip } from './TypeChip';

interface PokemonCardProps {
  pokemon: Pokemon;
  onPress: () => void;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onPress }) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      className="w-[48%] bg-pokemon-card rounded-2xl p-4 mb-4 items-center border-2 border-pokemon-border shadow-lg"
      style={{ 
        shadowColor: '#FF6B9D',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
      }}
    >
      <Text className="text-pokemon-purple text-xs self-end font-bold">
        #{String(pokemon.id).padStart(3, '0')}
      </Text>
      
      <Image
        source={{ uri: pokemon.sprites.other['official-artwork'].front_default }}
        className="w-24 h-24 my-2"
      />
      
      <Text className="text-pokemon-light-pink text-lg font-bold capitalize text-center">
        {pokemon.name}
      </Text>
      
      <View className="flex-row mt-2 gap-1 flex-wrap justify-center">
        {pokemon.types.map((type) => (
          <TypeChip 
            key={type.type.name} 
            typeName={type.type.name} 
            size="small"
          />
        ))}
      </View>
    </TouchableOpacity>
  );
};