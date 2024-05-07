import React from "react";
import * as S from "./styles";
import { Animated, Text } from "react-native";
import LottieView from "lottie-react-native";
import pokemonAnimation from "./pokemon.json";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";



export function Welcome() {
    const {navigate} = useNavigation()
    function handleNavigation() {
        navigate('Home')
    }
  return (
    <S.Container>
      <S.Content>
        <S.WrapperAnimator>
          <S.WrapperImage>
            <LottieView
              source={require("./pokemon.json")}
              style={{ width: 200, height: 200 }}
              loop
              autoPlay
            />
          </S.WrapperImage>
        </S.WrapperAnimator>
        <S.Title>Welcome!</S.Title>
        <S.SubTitle>Find all Pokémons and itens here!</S.SubTitle>
      </S.Content>
      <S.Footer>
        <Button title="Start" onPress={handleNavigation}></Button>
      </S.Footer>
    </S.Container>
  );
}
