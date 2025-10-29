// components/PokemonCard.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Pokemon } from '../types/pokemon';
import { TypeChip } from './TypeChip';
import { colors } from '../utils/colors';

interface PokemonCardProps {
  pokemon: Pokemon;
  onPress: () => void;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.cardId}>
        #{String(pokemon.id).padStart(3, '0')}
      </Text>
      
      <Image
        source={{ uri: pokemon.sprites.other['official-artwork'].front_default }}
        style={styles.cardImage}
      />
      
      <Text style={styles.cardName}>
        {pokemon.name}
      </Text>
      
      <View style={styles.cardTypesContainer}>
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

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: colors.cardBackground,
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.border,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  cardId: {
    color: colors.tertiary,
    fontSize: 12,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
  },
  cardImage: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  cardName: {
    color: colors.secondary,
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  cardTypesContainer: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 5,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});