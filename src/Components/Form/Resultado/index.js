import React from "react";
import { View, Text } from "react-native";

export default function Resultado({mensagem, imc})
{
    return (
        <View>
            <Text>{ mensagem }</Text>
            <Text>{ imc }</Text>
        </View>   
    );

};