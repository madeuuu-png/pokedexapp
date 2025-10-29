
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Pokemon } from '../types/pokemon';
import { PokemonCard } from '../components/PokemonCard';
import { PokemonDetail } from '../components/PokemonDetail';
import { SearchBar } from '../components/SearchBar';
import { LoadingScreen } from '../components/LoadingScreen';
import { colors } from '../utils/colors';

export default function App() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  // useEffect para obtener los Pokémon cuando carga la app
  useEffect(() => {
    fetchPokemonList();
  }, []);

  const fetchPokemonList = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const data = await response.json();
      
      const pokemonDetails: Pokemon[] = await Promise.all(
        data.results.map(async (pokemon: { url: string }) => {
          const res = await fetch(pokemon.url);
          return await res.json();
        })
      );
      
      setPokemonList(pokemonDetails);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
      setLoading(false);
    }
  };

  // Filtrar Pokémon según búsqueda
  const filteredPokemon = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <LoadingScreen />;
  }

  if (selectedPokemon) {
    return (
      <PokemonDetail 
        pokemon={selectedPokemon} 
        onBack={() => setSelectedPokemon(null)} 
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>✨ Pokédex ✨</Text>
        <Text style={styles.subtitle}>
          Descubre tus Pokémon favoritos 💜
        </Text>
        
        <SearchBar 
          value={searchTerm} 
          onChangeText={setSearchTerm} 
        />
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.gridContainer}>
          {filteredPokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              onPress={() => setSelectedPokemon(pokemon)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: colors.cardBackground,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    color: colors.secondary,
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: colors.tertiary,
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 20,
    paddingTop: 20,
  },
});