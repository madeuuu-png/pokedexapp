// components/PokemonDetail.tsx
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Pokemon } from '../types/pokemon';
import { TypeChip } from './TypeChip';
import { StatBar } from './StatBar';
import { colors } from '../utils/colors';

interface PokemonDetailProps {
  pokemon: Pokemon;
  onBack: () => void;
}

export const PokemonDetail: React.FC<PokemonDetailProps> = ({ pokemon, onBack }) => {
  return (
    <View style={styles.detailContainer}>
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Volver</Text>
      </TouchableOpacity>
      
      <ScrollView>
        <View style={styles.detailCard}>
          <Text style={styles.pokemonName}>{pokemon.name}</Text>
          <Text style={styles.pokemonId}>
            #{String(pokemon.id).padStart(3, '0')}
          </Text>
          
          <Image
            source={{ uri: pokemon.sprites.other['official-artwork'].front_default }}
            style={styles.detailImage}
          />
          
          <View style={styles.typesContainer}>
            {pokemon.types.map((type) => (
              <TypeChip 
                key={type.type.name} 
                typeName={type.type.name} 
                size="large"
              />
            ))}
          </View>

          <View style={styles.statsSection}>
            <Text style={styles.sectionTitle}>✨ Estadísticas</Text>
            {pokemon.stats.map((stat) => (
              <StatBar
                key={stat.stat.name}
                statName={stat.stat.name}
                statValue={stat.base_stat}
              />
            ))}
          </View>

          <View style={styles.physicalDataSection}>
            <Text style={styles.sectionTitle}>💫 Datos Físicos</Text>
            <View style={styles.physicalDataRow}>
              <View style={styles.physicalDataItem}>
                <Text style={styles.physicalDataLabel}>Altura</Text>
                <Text style={styles.physicalDataValue}>
                  {pokemon.height / 10} m
                </Text>
              </View>
              <View style={styles.physicalDataItem}>
                <Text style={styles.physicalDataLabel}>Peso</Text>
                <Text style={styles.physicalDataValue}>
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

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  backButton: {
    marginTop: 40,
    marginBottom: 20,
  },
  backButtonText: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: 30,
    padding: 25,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.border,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  pokemonName: {
    color: colors.secondary,
    fontSize: 32,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginBottom: 10,
  },
  pokemonId: {
    color: colors.tertiary,
    fontSize: 18,
    marginBottom: 20,
    fontWeight: '600',
  },
  detailImage: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  typesContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  statsSection: {
    width: '100%',
    marginTop: 20,
  },
  sectionTitle: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  physicalDataSection: {
    width: '100%',
    marginTop: 20,
  },
  physicalDataRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    backgroundColor: colors.inputBackground,
    borderRadius: 20,
    padding: 20,
  },
  physicalDataItem: {
    alignItems: 'center',
  },
  physicalDataLabel: {
    color: colors.tertiary,
    marginBottom: 5,
    fontSize: 14,
  },
  physicalDataValue: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: 'bold',
  },
});