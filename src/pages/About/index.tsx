import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Text, Alert, ScrollView } from "react-native";
import api from "../../service/api";
import { useTheme } from "styled-components";
import { Feather } from '@expo/vector-icons'
import circle  from '../../assets/img/circle.png'
import dotsImage from '../../assets/img/dots.png'
import * as S from './styles'
import { FadeAnimation } from "../../components/FadeAnimation";

type RouteParams = {
  pokemonId: number;
};

type Stats = {
    base_stat: 62,
    stat: {
        name: string;
    }
}
type Ability = {
    ability: { 
        name: string
    }
}
// Export to use on Style
export type TypeName = 
|'grass'
|'fire'
|'water'
|'poison'
|'normal'
|'bug'
|'flying'
|'eletric'
|'ground'

type PokemonType = {
    type: {
        name: TypeName
    }
}

type PokemonProps = {
    id: number;
    name: string;
    stats: Stats[]
    abilities: Ability[]
    color: string;
    types: PokemonType[]

}



export function About() {
    const route = useRoute();
    const { goBack } = useNavigation();
    const { pokemonId } = route.params as RouteParams;
    const { colors } = useTheme();

    const [pokemon, setPokemon] = useState({} as PokemonProps);
    const [load, setLoad] = useState(true);


    useEffect(() => {
        async function getPokemonDetail() {
        try {
            const response = await api.get(`/pokemon/${pokemonId}`);
            const { stats, abilities, id, name, types } = response.data;
            //console.log(JSON.stringify({ stats, abilities, id, name, types }, null, 2));

            const currentType = types[0].type.name as TypeName;
            const color = colors.backgroundCard[currentType];
            
            setPokemon({stats, abilities, id, name, color ,types});
            
            setLoad(false)
        } catch (err) {
            Alert.alert("404 😢 | Something went wrong! \nPlease check your internet connection!")
        } finally {
            setLoad(false)
        }
        }

        getPokemonDetail();
    });
    function handleGoBack(){
        goBack()
    }


    return <>
        {load ? <> 
            <Text style = {{marginTop : 200}}> Loading </Text>
        </> : 
        
        <ScrollView style = {{flex: 1, backgroundColor: '#fff'}}>
            <S.Header type = {pokemon.types[0].type.name}> 
            <S.BackButton onPress={ handleGoBack }> 
                <Feather name="chevron-left" size={24} color="#fff"/>
            </S.BackButton>
            <S.ContentImage>
                <S.CircleImage source={circle}/>
                <FadeAnimation>
                <S.PokemonImage source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
                }}/> 
                </FadeAnimation>
            </S.ContentImage>
            <S.Content>
                <S.PokemonID>#{pokemon.id}</S.PokemonID>
                <S.PokemonName>{pokemon.name}</S.PokemonName>
                <S.PokemonTypeContainer>
                    {
                        pokemon.types.map(({type}) => 
                        <S.PokemonType type={type.name} key={type.name}>
                            <S.PokemonTypeText>{type.name}</S.PokemonTypeText>
                        </S.PokemonType>
                        )
                    }
                </S.PokemonTypeContainer>
            </S.Content>
            <S.DotsImage source = {dotsImage}/>
            </S.Header>
            <S.Container>
                <S.Title type = {pokemon.types[0].type.name}>Base Stats</S.Title>

                {
                pokemon.stats.map(attribute => <>
                    <S.StatusBar key={attribute.stat.name}>
                        <S.Attributes>{attribute.stat.name}</S.Attributes>
                        <S.AttributeValue>{attribute.base_stat}</S.AttributeValue>
                        <S.ContentBar>
                            <S.ProgressBar type={pokemon.types[0].type.name}
                                borderWidth={1}
                                progress = {100}
                                width = {attribute.base_stat}
                                color = {pokemon.color}
                            /> 
                        </S.ContentBar>
                    </S.StatusBar>
                </>)
                }

                <S.Title type = {pokemon.types[0].type.name}> Abilities</S.Title>
                {
                    pokemon.abilities.map(currentAbility => 
                        <S.Ability>
                            {currentAbility.ability.name}
                        </S.Ability>
                    )
                }
            </S.Container>
        </ScrollView>
        }
    </>

}
