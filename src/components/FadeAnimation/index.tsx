import React, { useEffect } from "react";
import { ViewProps, useWindowDimensions } from "react-native";
import * as S from './styles'
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import styled from 'styled-components/native';

type FadeAnimationProps = {
    children: React.ReactNode
} & ViewProps

export function FadeAnimation({ children, ...rest }: FadeAnimationProps) {
    const { width: displayWidth } = useWindowDimensions()
    const cardOpaticy = useSharedValue(0) // Define opacity 0 
    const cardOffSet = useSharedValue(0.25 * displayWidth) //Define start position at 25% on the right side of the screen

    const animatedStyle = useAnimatedStyle(() => { //Create the type of animation, Opacity + Translate
        'worklet' 
        return {
            opacity: cardOpaticy.value,
            transform: [
                {translateX: cardOffSet.value}
            ]
        }
    })

    useEffect(() => {
        cardOpaticy.value = withTiming(1,{duration: 1000}); //Setting Opacity to 1 on a duration of 1 second.
        cardOffSet.value = withTiming(0, { duration: 1000 }); // Setting the position to 0 on a duration of 1 second.
    }, [])

    return (
        <S.AnimationContainer {...rest} style={animatedStyle}>
            {children}
        </S.AnimationContainer>
    )
}