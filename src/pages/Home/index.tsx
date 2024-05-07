import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { FlatList } from "react-native";
import api from "../../service/api";
import { Card, Pokemon, PokemonType } from "../../components/Card";
import { FadeAnimation } from "../../components/FadeAnimation";
import pokeballHeader from "../../assets/img/pokeball.png";
import { useNavigation } from "@react-navigation/native";

type Request = {
  id: number;
  types: PokemonType[];
};

export function Home() {
  //Starts a new array of pokemons but empty
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const { navigate } = useNavigation();
  function handlerNavigationAbout(pokemonId: number) {
    // @ts-ignore
    navigate("About", { pokemonId });
  }

  useEffect(() => {
    async function getAllPokemons() {
      const response = await api.get("/pokemon");
      const { results } = response.data;

      //Maping the information from the API - Loading a list of pokemons with the information from each
      const payloadPokemons = await Promise.all(
        results.map(async (pokemon: Pokemon) => {
          const { id, types } = await getMoreInfo(pokemon.url);

          return {
            name: pokemon.name,
            id,
            types,
          };
        })
      );
      setPokemons(payloadPokemons);
    }
    getAllPokemons();
  }, []);

  //Getting more informaTion about each Pokemon
  async function getMoreInfo(url: string) {
    const response = await api.get(url);
    const { id, types } = response.data;

    //@ts-ignore
    const typeNames: PokemonType = types.map((t) => t.type.name);

    return { id, types: typeNames };
  }

  return (
    <S.Container>
      <FlatList
        ListHeaderComponent={
          <>
            <S.Header source={pokeballHeader} />
            <S.Title>Pokédex</S.Title>
          </>
        }
        contentContainerStyle={{ paddingHorizontal: 20 }}
        data={pokemons}
        keyExtractor={(pokemons) => pokemons.id.toString()}
        renderItem={({ item: pokemon }) => (
          <FadeAnimation>
            <Card
              data={pokemon}
              onPress={() => {
                handlerNavigationAbout(pokemon.id);
              }}
            />
          </FadeAnimation>
        )}
      />
    </S.Container>
  );
}
