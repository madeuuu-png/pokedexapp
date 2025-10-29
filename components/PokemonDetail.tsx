// components/PokemonDetail.tsx
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Pokemon } from '../types/pokemon';
import { TypeChip } from './TypeChip';
import { StatBar } from './StatBar';

interface PokemonDetailProps {
  pokemon: Pokemon;
  onBack: () => void;
}

export const PokemonDetail: React.FC<PokemonDetailProps> = ({ pokemon, onBack }) => {
  return (
    <View className="flex-1 bg-pokemon-dark p-5">
      <TouchableOpacity onPress={onBack} className="mt-10 mb-5">
        <Text className="text-pokemon-pink text-lg font-bold">← Volver</Text>
      </TouchableOpacity>
      
      <ScrollView>
        <View 
          className="bg-pokemon-card rounded-3xl p-6 items-center border-2 border-pokemon-border"
          style={{ 
            shadowColor: '#FF6B9D',
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.4,
            shadowRadius: 12,
            elevation: 8,
          }}
        >
          <Text className="text-pokemon-light-pink text-3xl font-bold capitalize mb-2">
            {pokemon.name}
          </Text>
          <Text className="text-pokemon-purple text-lg mb-5 font-semibold">
            #{String(pokemon.id).padStart(3, '0')}
          </Text>
          
          <Image
            source={{ uri: pokemon.sprites.other['official-artwork'].front_default }}
            className="w-60 h-60 mb-5"
          />
          
          <View className="flex-row mb-5 gap-2 flex-wrap justify-center">
            {pokemon.types.map((type) => (
              <TypeChip 
                key={type.type.name} 
                typeName={type.type.name} 
                size="large"
              />
            ))}
          </View>

          <View className="w-full mt-5">
            <Text className="text-pokemon-pink text-xl font-bold mb-4">
              ✨ Estadísticas
            </Text>
            {pokemon.stats.map((stat) => (
              <StatBar
                key={stat.stat.name}
                statName={stat.stat.name}
                statValue={stat.base_stat}
              />
            ))}
          </View>

          <View className="w-full mt-5">
            <Text className="text-pokemon-pink text-xl font-bold mb-2">
              💫 Datos Físicos
            </Text>
            <View className="flex-row justify-around mt-2 bg-pokemon-input rounded-2xl p-5">
              <View className="items-center">
                <Text className="text-pokemon-purple mb-1 text-sm">Altura</Text>
                <Text className="text-pokemon-light-pink text-xl font-bold">
                  {pokemon.height / 10} m
                </Text>
              </View>
              <View className="items-center">
                <Text className="text-pokemon-purple mb-1 text-sm">Peso</Text>
                <Text className="text-pokemon-light-pink text-xl font-bold">
                  {pokemon.weight / 10} kg
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};