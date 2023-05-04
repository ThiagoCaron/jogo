import { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';

export default function Casa()
{

    const [jogador, setJogador] = useState(null);

    function jogada()
    {
        setJogador(1)
    }

    let icone = "";

    if (jogador == 1)
    {
        icone = <Icon name="cross" size={100} />
    } else if (jogador == 2)
    {
        icone = <Icon name="circle" size={60} />
    }

    return (
        <TouchableWithoutFeedback onPress={ jogada }>
        <View style={css.casa}>
            {icone}
        </View>
        </TouchableWithoutFeedback>
    )
}

const css = StyleSheet.create({
    casa: {
        height: 100,
        width: 100,
        borderColor: "black",
        borderStyle: "solid",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})