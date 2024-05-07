import React from "react";
import * as S from "./styles";
import dotsImage from "../../assets/img/dots.png";
import pokeballImage from "../../assets/img/pokeballCard.png";
import { TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";

export type PokemonType = {
  type: {
    name: string;
  };
};

export type Pokemon = {
  name: string; 
  url: string;
  id: number;
  types: PokemonType[];
};

type Props = {
  data: Pokemon;
} & TouchableOpacityProps;

export function Card({ data, ...rest }: Props) {
  return (
  <S.PokemonCard key={data.id} type={data.types[0]} {...rest}>
      <S.LeftSide>
        <S.PokemonId>#{data.id}</S.PokemonId>
        <S.PokemonName>{data.name}</S.PokemonName>
        <S.ImageCardDetailLeftSide source={dotsImage} />
        <S.PokemonContentType>
          {data.types.map((PokemonType) => (
            <S.PokemonType key = {PokemonType.type} type={PokemonType}>
              <S.PokemonTypeText key={PokemonType.type}>
                {PokemonType}
              </S.PokemonTypeText>
            </S.PokemonType>
          ))}
        </S.PokemonContentType>
      </S.LeftSide>
      <S.RightSide>
        <S.PokeballDetail source={pokeballImage} />
        <S.PokemonImage
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
          }}
        />
      </S.RightSide>
    </S.PokemonCard> );
  
}
