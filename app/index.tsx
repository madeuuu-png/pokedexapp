
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Pokemon } from '../types/pokemon';
import { PokemonCard } from '../components/PokemonCard';
import { PokemonDetail } from '../components/PokemonDetail';
import { SearchBar } from '../components/SearchBar';
import { LoadingScreen } from '../components/LoadingScreen';

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
    <View className="flex-1 bg-pokemon-dark">
      <View className="pt-16 px-5 pb-5 bg-pokemon-card rounded-b-3xl">
        <Text className="text-pokemon-light-pink text-4xl font-bold mb-2 text-center">
          ✨ Pokédex ✨
        </Text>
        <Text className="text-pokemon-purple text-base mb-5 text-center">
          Descubre tus Pokémon favoritos 💜
        </Text>
        
        <SearchBar 
          value={searchTerm} 
          onChangeText={setSearchTerm} 
        />
      </View>

      <ScrollView className="flex-1 px-5">
        <View className="flex-row flex-wrap justify-between pb-5 pt-5">
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